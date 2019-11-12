import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#9c27b0',
        secondary: '#ff5722',
        accent: '#009688',
        error: '#f44336',
        warning: '#ff9800',
        info: '#2196f3',
        success: '#4caf50'
      },
    },
  },
  icons: {
    iconfont: 'mdi',
  },
});
