<template>
  <v-col>
      <h1>{{name}}</h1>
      <v-btn @click="fetchEvents"
        :loading="loading"
        color="primary"
        class="mx-2"
      >Fetch Events</v-btn>
      <v-btn @click="stopFetchingContinuously"
        v-if="fetchingContinuously"
        color="secondary"
        class="mx-2"
      >Stop Fetching</v-btn>
      <p>Received: {{timeToReceive}}ms - Parsed: {{timeToParse}}ms</p>
      <event-list :events=events v-if="showData"/>
    </v-col>
</template>

<script lang="ts">
import Vue from 'vue';
import EventList from '@/components/EventList.vue';
import EventApiOptions from '@/utils/eventApiOptions.interface';

export default Vue.extend({
  components: {
    EventList
  },
  props: {
    name: {
      type: String,
      required: true
    },
    EventApiOptions: {
      type: Object as () => EventApiOptions,
      required: true
    },
    showData: {
      type: Boolean,
      required: false,
      default: false
    },
    fetchContinuously: {
      type: Boolean,
      required: false,
      default: false
    },
    fetchInterval: {
      type: Number,
      required: false,
      default: 5000
    }
  },
  data: () => {
    return {
      events: [],
      loading: false,
      timeToReceive: 0,
      timeToParse: 0,
      fetchingContinuously: false,
      intervalID: 0
    };
  },
  methods: {
    async fetchEvents() {
      this.loading = true;
      if (this.fetchContinuously) {
        this.fetchingContinuously = true;
        this.intervalID = setInterval(this.getEventData, this.fetchInterval);
      } else {
        await this.getEventData();
        this.loading = false;
      }
    },
    stopFetchingContinuously() {
      this.fetchingContinuously = false;
      this.loading = false;
      if (this.intervalID) {
        clearInterval(this.intervalID);
      }
    },
    async getEventData() {
      try {
        const startTime = performance.now();
        const response = await fetch(
          this.EventApiOptions.apiUrl,
          this.EventApiOptions.fetchOptions
        );
        this.timeToReceive = performance.now() - startTime;

        const json = await response.json();
        this.timeToParse = performance.now() - startTime;

        this.events = this.EventApiOptions.extractData(json);

      } catch (error) {
        console.log(error);
      }
    }
  }
});
</script>