function getGuild(state) {
  return state.guilds.find(val => val.id === state.selectedGuild);
}

function guildExists(state) {
  return getGuild(state) != null;
}

export default {
  guildPrefix(state) {
    if (guildExists(state)) return getGuild(state).prefix;
    return null;
  },
  guildEmbedPreference(state) {
    if (guildExists(state)) return getGuild(state).embedPreference;
    return null;
  },
  guildMemberCount(state) {
    if (guildExists(state)) return getGuild(state).memberCount;
    return null;
  },
};
