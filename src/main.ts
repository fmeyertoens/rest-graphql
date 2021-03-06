import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

// @ts-ignore no typings
import splitPane from 'vue-splitpane';

import store from './store';

Vue.config.productionTip = false;

Vue.component('split-pane', splitPane);

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App)
}).$mount('#app');
