import { defineStore } from "pinia";

const defaultRestUri = import.meta.env.VITE_REST_URI ?? "https://people-api.herokuapp.com/events";
const defaultGraphqlUri =
  import.meta.env.VITE_GRAPHQL_URI ?? "https://event-api-graphql.herokuapp.com/api";

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
