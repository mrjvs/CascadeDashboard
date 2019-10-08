import gql from 'graphql-tag';
import apollo from '../apollo/client';
import { parseGuildData } from './utils';

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
    }
  }
`;

// deleteCommand,
// showPermErrors,
// adminsHaveAllPerms,
// prefix,
// enabledModules,
// mentionPrefix,
// allowTagCommands,
// useEmbedForMessages,
// showModuleErrors,
// tags,

export default {
  async getGuildData({ commit, state }) {
    commit('setLoading', true);
    const response = await apollo.query({
      query: GUILD_DATA_QUERY,
      variables: {
        id: state.selectedGuild,
      },
    });

    const data = {
      ...response.data.guild.coreSettings,
      ...response.data.guild,
    };

    delete data.coreSettings;

    commit('setGuildData', data);
    commit('setLoading', false);
  },
  async saveGuildData({ commit, state }, changes) {
    const response = await apollo.mutate({
      mutation: GUILD_DATA_MUTATION,
      variables: {
        newSettings: changes,
        id: state.selectedGuild,
      },
    });
    commit('setGuildData', response.data.updateCoreSettings);
    commit('clearChanges');
  },
  async saveChanges({ dispatch, state }) {
    const guildData = parseGuildData(state);
    if (guildData !== null) {
      try {
        await dispatch('saveGuildData', guildData);
      } catch (e) {
        console.error('Failed to save guildata', e);
      }
    }
  },
};
