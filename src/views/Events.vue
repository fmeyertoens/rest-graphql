<template>
  <v-container>
    <div class="d-flex">
      <v-checkbox
        v-model="showData"
        label="Show Data"
        class="my-0 mx-2"
        dense
      ></v-checkbox>
      <v-checkbox
        v-model="fetchContinuously"
        label="Fetch Continuously"
        class="my-0 mx-2"
        dense
      ></v-checkbox>
      <v-text-field
        v-model.number="fetchInterval"
        type="number"
        dense
        label="Interval"
        class="numberInput"
        step="100"
      ></v-text-field>
    </div>
    <v-row>
    <event-fetch
      name="GraphQL"
      :EventApiOptions="graphqlOptions"
      :showData="showData"
      :fetchContinuously="fetchContinuously"
      :fetchInterval="fetchInterval"
    />
    <event-fetch
      name="REST"
      :EventApiOptions="restOptions"
      :showData="showData"
      :fetchContinuously="fetchContinuously"
      :fetchInterval="fetchInterval"
    />
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
      restOpts,
      showData: false,
      fetchContinuously: false,
      fetchInterval: 5000
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
<style lang="scss" scoped>
.numberInput {
  max-width: 5em;
}
</style>