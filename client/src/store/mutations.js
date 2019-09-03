export default {
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
};
