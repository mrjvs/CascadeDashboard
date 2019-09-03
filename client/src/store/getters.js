export default {
  guildPrefix(state) {
    return state.guild.prefix;
  },
  guildEmbedPreference(state) {
    return state.guild.embedPreference;
  },
  guildMemberCount(state) {
    return state.guild.memberCount;
  },
};
