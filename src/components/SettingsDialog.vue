<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template #activator="{ props }">
      <v-btn icon v-bind="props">
        <v-icon>mdi-wrench</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h6">Settings</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-combobox
                label="REST URI"
                required
                v-model="restUri"
                :items="restUris"
              ></v-combobox>
            </v-col>
            <v-col cols="12">
              <v-combobox
                label="GraphQL URI"
                required
                v-model="graphqlUri"
                :items="graphQLUris"
              ></v-combobox>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" variant="text" @click="dialog = false">Close</v-btn>
        <v-btn color="primary" variant="text" @click="dialog = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import useSettingsStore from "../store";

export default defineComponent({
  setup() {
    const settingsStore = useSettingsStore();
    const dialog = ref(false);
    const graphQLUris = [
      "https://event-api-graphql.herokuapp.com/api",
      "http://localhost:8000/api",
    ];
    const restUris = ["https://people-api.herokuapp.com/events", "http://localhost:5000/events"];

    const restUri = computed({
      get: () => settingsStore.restUri,
      set: (value: string) => settingsStore.updateRestUri(value),
    });

    const graphqlUri = computed({
      get: () => settingsStore.graphqlUri,
      set: (value: string) => settingsStore.updateGraphqlUri(value),
    });

    return {
      dialog,
      graphQLUris,
      restUris,
      restUri,
      graphqlUri,
    };
  },
});
</script>
