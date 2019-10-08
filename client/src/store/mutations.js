import Vue from 'vue';
import { setChange, SETTINGS, getValueFromPath } from './utils';

const genFunc = key => (state, val) => setChange(state, key, val);

const mutations = Object.keys(SETTINGS).reduce((acc, key) => {
  acc[`setGuild${key}`] = genFunc(SETTINGS[key]);
  return acc;
}, {});

export default {
  ...mutations,
  selectedGuild(state, guildId) {
    state.selectedGuildId = guildId;
  },
  setGuildData(state, guildData) {
    const guildIndex = state.guilds.findIndex(val => val.id === state.selectedGuildId);
    if (state.guilds[guildIndex]) {
      const merged = { ...state.guilds[guildIndex], ...guildData };
      Vue.set(state.guilds, guildIndex, merged);
    } else {
      state.guilds.push({ ...guildData, id: state.selectedGuildId });
    }
  },
  setLoading(state, bool) {
    state.loading = bool;
  },
  clearNonChanges(state) {
    const changes = state.changes.filter((change) => {
      const guild = state.guilds.find(el => el.id === state.selectedGuildId);
      const currentValue = getValueFromPath(guild, change.path);
      return change.value !== currentValue;
    });
    Vue.set(state, 'changes', changes);
  },
  clearChanges(state) {
    state.changes = [];
  },
};
