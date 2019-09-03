import gql from 'graphql-tag';
import apollo from '../apollo/client';

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
};
