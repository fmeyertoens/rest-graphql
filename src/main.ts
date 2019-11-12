import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
// @ts-ignore no typings
import splitPane from 'vue-splitpane';

Vue.config.productionTip = false;

Vue.component('split-pane', splitPane);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
