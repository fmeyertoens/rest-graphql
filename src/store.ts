import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    restUri: 'https://people-api.herokuapp.com/events',
    graphqlUri: 'https://event-api-graphql.herokuapp.com/api'
  },
  mutations: {
    updateRestUri(state, newUri) {
      state.restUri = newUri;
    },
    updateGraphQLUri(state, newUri) {
      state.graphqlUri = newUri;
    }
  },
  actions: {

  }
});
