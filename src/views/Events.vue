<template>
  <v-container>
    <div class="d-flex">
      <v-checkbox v-model="showData" label="Show Data" class="my-0 mx-2" dense></v-checkbox>
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
        :event-api-options="graphqlOptions"
        :showData="showData"
        :fetchContinuously="fetchContinuously"
        :fetchInterval="fetchInterval"
      />
      <event-fetch
        name="REST"
        :event-api-options="restOptions"
        :showData="showData"
        :fetchContinuously="fetchContinuously"
        :fetchInterval="fetchInterval"
      />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import EventFetch from "@/components/EventFetch.vue";
import graphqlOpts from "@/utils/graphqlOptions";
import restOpts from "@/utils/restOptions";
import useSettingsStore from "../store";

export default defineComponent({
  components: {
    EventFetch,
  },
  setup() {
    const settingsStore = useSettingsStore();
    const showData = ref(false);
    const fetchContinuously = ref(false);
    const fetchInterval = ref(5000);

    const restOptions = computed(() => ({
      ...restOpts,
      apiUrl: settingsStore.restUri,
    }));

    const graphqlOptions = computed(() => ({
      ...graphqlOpts,
      apiUrl: settingsStore.graphqlUri,
    }));

    return {
      showData,
      fetchContinuously,
      fetchInterval,
      restOptions,
      graphqlOptions,
    };
  },
});
</script>
<style lang="scss" scoped>
.numberInput {
  max-width: 5em;
}
</style>
