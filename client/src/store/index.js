import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    guild: {
      prefix: ';',
      embedPreference: true,
      memberCount: 42,
    },
  },
  getters,
});
