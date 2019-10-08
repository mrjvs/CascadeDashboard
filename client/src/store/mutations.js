import { setChange } from './utils';

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
  setGuildPrefix(state, prefix) {
    setChange(state, 'prefix', 'prefix', prefix);
  },
  setGuildUseEmbedForMessages(state, bool) {
    setChange(state, 'useEmbedForMessages', 'useEmbedForMessages', bool);
  },
  setGuildDeleteCommand(state, bool) {
    setChange(state, 'deleteCommand', 'deleteCommand', bool);
  },
  setGuildShowPermErrors(state, bool) {
    setChange(state, 'showPermErrors', 'showPermErrors', bool);
  },
  setGuildAdminsHaveAllPerms(state, bool) {
    setChange(state, 'adminsHaveAllPerms', 'adminsHaveAllPerms', bool);
  },
  setGuildMentionPrefix(state, bool) {
    setChange(state, 'mentionPrefix', 'mentionPrefix', bool);
  },
  setGuildAllowTagCommands(state, bool) {
    setChange(state, 'allowTagCommands', 'allowTagCommands', bool);
  },
  setGuildShowModuleErrors(state, bool) {
    setChange(state, 'showModuleErrors', 'showModuleErrors', bool);
  },
  clearChanges(state) {
    state.changes = [];
  },
};
