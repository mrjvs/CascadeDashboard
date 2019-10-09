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
    const guildIndex = state.guilds.findIndex(val => val.guildId === state.selectedGuildId);
    if (state.guilds[guildIndex]) {
      const merged = { ...state.guilds[guildIndex], ...guildData };
      Vue.set(state.guilds, guildIndex, merged);
    } else {
      state.guilds.push({ ...guildData, guildId: state.selectedGuildId });
    }
  },
  setUserGuilds(state, guilds) {
    Vue.set(state, 'guilds', guilds);
  },
  setLoading(state, bool) {
    state.loading = bool;
  },
  clearNonChanges(state) {
    const changes = state.changes.filter((change) => {
      const guild = state.guilds.find(el => el.guildId === state.selectedGuildId);
      const currentValue = getValueFromPath(guild, change.path);
      return change.value !== currentValue;
    });
    Vue.set(state, 'changes', changes);
  },
  clearChanges(state) {
    state.changes = [];
  },
};
