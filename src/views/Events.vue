<template>
  <v-container>
    <v-row>
    <event-fetch name="GraphQL" :EventApiOptions="graphqlOptions"/>
    <event-fetch name="REST" :EventApiOptions="restOptions"/>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import EventFetch from '@/components/EventFetch.vue';
import graphqlOpts from '@/utils/graphqlOptions';
import restOpts from '@/utils/restOptions';
import store from '../store';

export default Vue.extend({
  components: {
    EventFetch
  },
  data: () => {
    return {
      graphqlOpts,
      restOpts
    };
  },
  computed: {
    restOptions() {
      return {
        ...restOpts,
        apiUrl: store.state.restUri
      };
    },
    graphqlOptions() {
      return {
        ...graphqlOpts,
        apiUrl: store.state.graphqlUri
      };
    }
  }
});
</script>
