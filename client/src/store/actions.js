import gql from 'graphql-tag';
import apollo from '../apollo/client';
import { parseCoreSettingChanges } from './utils';

const USER_GUILDS_QUERY = gql`
  query userGuilds {
    userGuilds {
      memberCount,
      name,
      guildId,
      iconUrl,
      ownerId,
      coreSettings {
        deleteCommand,
        showPermErrors,
        adminsHaveAllPerms,
        prefix,
        enabledModules,
        mentionPrefix,
        allowTagCommands,
        useEmbedForMessages,
        showModuleErrors,
        tags,
      }
    }
  }
`;

const GUILD_DATA_QUERY = gql`
  query guild($id: Long!) {
    guild(id: $id) {
      memberCount,
      coreSettings {
        deleteCommand,
        showPermErrors,
        adminsHaveAllPerms,
        prefix,
        enabledModules,
        mentionPrefix,
        allowTagCommands,
        useEmbedForMessages,
        showModuleErrors,
        tags,
        helpShowAllModules,
        helpHideCommandsNoPermission,
      }
    }
  }
`;

const GUILD_DATA_MUTATION = gql`
  mutation updateCoreSettings($newSettings: Map_String_ObjectScalar!, $id: Long!) {
    updateCoreSettings(newSettings: $newSettings, guildId: $id) {
      deleteCommand,
      showPermErrors,
      adminsHaveAllPerms,
      prefix,
      enabledModules,
      mentionPrefix,
      allowTagCommands,
      useEmbedForMessages,
      showModuleErrors,
      tags,
      helpShowAllModules,
      helpHideCommandsNoPermission,
    }
  }
`;

export default {
  async getUserGuilds({ commit }) {
    commit('setLoading', true);
    const response = await apollo.query({
      query: USER_GUILDS_QUERY,
      fetchPolicy: 'no-cache',
    });
    commit('setUserGuilds', response.data.userGuilds);
    commit('setLoading', false);
  },
  async getGuildData({ commit }, guildId) {
    commit('setLoading', true);
    const response = await apollo.query({
      query: GUILD_DATA_QUERY,
      variables: {
        id: guildId,
      },
      fetchPolicy: 'no-cache',
    });

    commit('setGuildData', response.data.guild);
    commit('clearNonChanges');
    commit('setLoading', false);
  },
  async saveGuildData({ commit }, { guildId, changes }) {
    const response = await apollo.mutate({
      mutation: GUILD_DATA_MUTATION,
      variables: {
        newSettings: changes,
        id: guildId,
      },
    });
    commit('setGuildData', {
      coreSettings: response.data.updateCoreSettings,
    });
    commit('clearChanges');
  },
  async saveChanges({ dispatch, state }) {
    const guildData = parseCoreSettingChanges(state);
    if (guildData !== null) {
      try {
        await dispatch('saveGuildData', {
          guildId: state.selectedGuildId,
          changes: guildData,
        });
      } catch (e) {
        console.error('Failed to save guildata', e);
      }
    }
  },
};
