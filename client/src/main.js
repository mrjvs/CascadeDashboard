import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import apolloClient from './apollo/client';

Vue.config.productionTip = false;

Vue.use(apolloClient);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
