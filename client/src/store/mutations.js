import { setChange, SETTINGS } from './utils';

const genFunc = key => (state, val) => setChange(state, key, val);

const mutations = Object.keys(SETTINGS).reduce((acc, key) => {
  acc[`setGuild${key}`] = genFunc(SETTINGS[key]);
  return acc;
}, {});

export default {
  ...mutations,
  selectedGuild(state, guildId) {
    state.selectedGuild = guildId;
  },
  setGuildData(state, guildData) {
    const guildIndex = state.guilds.findIndex(val => val.id === state.selectedGuild);
    if (state.guilds[guildIndex]) {
      const merged = { ...state.guilds[guildIndex], ...guildData };
      state.guilds[guildIndex] = merged;
    } else {
      state.guilds.push({ ...guildData, id: state.selectedGuild });
    }
  },
  setLoading(state, bool) {
    state.loading = bool;
  },
  clearChanges(state) {
    state.changes = [];
  },
};
