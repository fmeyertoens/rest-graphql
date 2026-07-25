import { defineStore } from "pinia";

const defaultRestUri = import.meta.env.VITE_REST_URI ?? "/rest/events";
const defaultGraphqlUri = import.meta.env.VITE_GRAPHQL_URI ?? "/graphql/api";

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    restUri: defaultRestUri,
    graphqlUri: defaultGraphqlUri,
  }),
  actions: {
    updateRestUri(newUri: string) {
      this.restUri = newUri;
    },
    updateGraphqlUri(newUri: string) {
      this.graphqlUri = newUri;
    },
  },
});

export default useSettingsStore;
