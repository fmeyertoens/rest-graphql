import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    restUri: "https://people-api.herokuapp.com/events",
    graphqlUri: "https://event-api-graphql.herokuapp.com/api",
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
