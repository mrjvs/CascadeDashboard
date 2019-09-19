import gql from 'graphql-tag';
import apollo from '../apollo/client';
import { parseGuildData } from './utils';

export default {
  async getGuildData({ commit, state }) {
    commit('setLoading', true);
    const response = await apollo.query({
      query: gql`
        query guild($id: Long!) {
          guild(id: $id) {
            memberCount,
            coreSettings {
              useEmbedForMessages,
              prefix
            }
          }
        }
      `,
      variables: {
        id: state.selectedGuild,
      },
    });

    commit('setGuildData', {
      prefix: response.data.guild.coreSettings.prefix,
      embedPreference: response.data.guild.coreSettings.useEmbedForMessages,
      memberCount: response.data.guild.memberCount,
    });
    commit('setLoading', false);
  },
  async saveChanges({ dispatch, state }) {
    const guildData = parseGuildData(state);
    if (guildData !== null) {
      try {
        await dispatch('saveGuildData', guildData);
      } catch (e) {
        console.error('Failed to save guildata');
      }
    }
  },
};
