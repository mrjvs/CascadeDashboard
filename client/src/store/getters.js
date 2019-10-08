import { getNewestChange, getStateGuildData } from './utils';

export default {
  guildPrefix(state) {
    return getNewestChange(state, 'prefix', 'prefix');
  },
  guildUseEmbedForMessages(state) {
    return getNewestChange(state, 'useEmbedForMessages', 'useEmbedForMessages');
  },
  guildMemberCount(state) {
    return getStateGuildData(state, 'memberCount');
  },
  hasChanges(state) {
    return state.changes.length !== 0;
  },
};
