<template>
  <v-col>
      <h1>{{name}}</h1>
      <v-btn @click="fetchEvents"
        :loading="loading"
        color="primary"
        >Fetch Events</v-btn>
      <p>Received: {{timeToReceive}}ms - Parsed: {{timeToParse}}ms</p>
      <event-list :events=events />
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
    }
  },
  data: () => {
    return {
      events: [],
      loading: false,
      timeToReceive: 0,
      timeToParse: 0
    };
  },
  methods: {
    async fetchEvents() {
      try {
        this.loading = true;
        const startTime = Date.now();
        const response = await fetch(
          this.EventApiOptions.apiUrl,
          this.EventApiOptions.fetchOptions
        );
        this.timeToReceive = Date.now() - startTime;

        const json = await response.json();
        this.timeToParse = Date.now() - startTime;

        this.events = this.EventApiOptions.extractData(json);

      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    }
  }
});
</script>