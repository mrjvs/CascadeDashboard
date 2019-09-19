import { getNewestChange, getStateGuildData } from './utils';

export default {
  guildPrefix(state) {
    return getNewestChange(state, 'prefix', 'prefix');
  },
  guildEmbedPreference(state) {
    return getNewestChange(state, 'embedPreference', 'embedPreference');
  },
  guildMemberCount(state) {
    return getStateGuildData(state, 'memberCount');
  },
  hasChanges(state) {
    return state.changes.length !== 0;
  },
};
