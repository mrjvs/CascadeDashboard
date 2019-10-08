import { getNewestChange, getStateGuildData } from './utils';

export default {
  guildPrefix(state) {
    return getNewestChange(state, 'prefix', 'prefix');
  },
  guildUseEmbedForMessages(state) {
    return getNewestChange(state, 'useEmbedForMessages', 'useEmbedForMessages');
  },
  guildDeleteCommand(state) {
    return getNewestChange(state, 'deleteCommand', 'deleteCommand');
  },
  guildShowPermErrors(state) {
    return getNewestChange(state, 'showPermErrors', 'showPermErrors');
  },
  guildAdminsHaveAllPerms(state) {
    return getNewestChange(state, 'adminsHaveAllPerms', 'adminsHaveAllPerms');
  },
  guildMentionPrefix(state) {
    return getNewestChange(state, 'mentionPrefix', 'mentionPrefix');
  },
  guildAllowTagCommands(state) {
    return getNewestChange(state, 'allowTagCommands', 'allowTagCommands');
  },
  guildShowModuleErrors(state) {
    return getNewestChange(state, 'showModuleErrors', 'showModuleErrors');
  },
  guildMemberCount(state) {
    return getStateGuildData(state, 'memberCount');
  },
  hasChanges(state) {
    return state.changes.length !== 0;
  },
};
