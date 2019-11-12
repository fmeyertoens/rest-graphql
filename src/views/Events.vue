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
import graphqlOptions from '@/utils/graphqlOptions';
import restOptions from '@/utils/restOptions';

export default Vue.extend({
  components: {
    EventFetch
  },
  data: () => {
    return {
      graphqlOptions,
      restOptions
    };
  }
});
</script>
