import gql from 'graphql-tag';
import apollo from '../apollo/client';
import { parseGuildData } from './utils';

const GUILD_DATA_QUERY = gql`
  query guild($id: Long!) {
    guild(id: $id) {
      memberCount,
      coreSettings {
        useEmbedForMessages,
        prefix
      }
    }
  }
`;

const GUILD_DATA_MUTATION = gql`
  mutation updateCoreSettings($newSettings: Map_String_ObjectScalar!, $id: Long!) {
    updateCoreSettings(newSettings: $newSettings, guildId: $id) {
      useEmbedForMessages,
      prefix
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

    commit('setGuildData', {
      prefix: response.data.guild.coreSettings.prefix,
      useEmbedForMessages: response.data.guild.coreSettings.useEmbedForMessages,
      memberCount: response.data.guild.memberCount,
    });
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
