import Vue from 'vue';
import App from './App.vue';
import router from './router';
import apolloProvider from './vue-apollo';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider,
  store,
  render: h => h(App),
}).$mount('#app');
