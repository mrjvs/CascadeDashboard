import Vue from 'vue';
import Dashboard from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(Dashboard),
}).$mount('#app');
