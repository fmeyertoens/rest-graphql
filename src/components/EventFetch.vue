<template>
  <v-col>
      <h1>{{name}}</h1>
      <v-btn @click="fetchEvents"
        :loading="loading"
        color="primary"
        class="ma-2"
      >Fetch Events</v-btn>
      <v-btn @click="stopFetchingContinuously"
        v-if="fetchingContinuously"
        color="accent"
        class="ma-2"
      >Stop Fetching</v-btn>
      <v-btn @click="clearTable"
        v-if="timings.length > 0"
        color="accent"
        class="ma-2"
      >Clear Table</v-btn>
      <timing-list :timings=timings />
      <event-list :events=events v-if="showData"/>
    </v-col>
</template>

<script lang="ts">
import Vue from 'vue';
import EventList from '@/components/EventList.vue';
import TimingList from '@/components/TimingList.vue';
import EventApiOptions from '@/utils/eventApiOptions.interface';

export default Vue.extend({
  components: {
    EventList,
    TimingList
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
      timings: [] as Array<{timeToReceive: number, timeToParse: number}>,
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
    clearTable() {
      this.timings = [];
    },
    async getEventData() {
      try {
        const startTime = performance.now();
        const response = await fetch(
          this.EventApiOptions.apiUrl,
          this.EventApiOptions.fetchOptions
        );
        const timeToReceive = performance.now() - startTime;

        const json = await response.json();
        const timeToParse = performance.now() - startTime;

        this.events = this.EventApiOptions.extractData(json);
        this.timings.push({timeToReceive, timeToParse});
      } catch (error) {
        console.log(error);
      }
    }
  }
});
</script>