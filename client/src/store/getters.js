export default {
  guildPrefix(state) {
    return state.guilds[state.selectedGuild].prefix;
  },
  guildEmbedPreference(state) {
    return state.guilds[state.selectedGuild].embedPreference;
  },
  guildMemberCount(state) {
    return state.guilds[state.selectedGuild].memberCount;
  },
};
