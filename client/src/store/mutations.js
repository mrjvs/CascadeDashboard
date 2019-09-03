export default {
  selectedGuild(state, guildId) {
    state.selectedGuild = guildId;
  },
  getGuildData(state) {
    state.guilds[state.selectedGuild] = {
      prefix: ';',
      embedPreference: true,
      memberCount: 42,
    };
  },
};
