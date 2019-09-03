import ApolloClient from 'apollo-boost';
import { isTokenValid, generateNewToken, getTokenObject } from '../utils/auth';

export default new ApolloClient({
  uri: process.env.VUE_APP_GRAPHQL_URL,
  request: async (operation) => {
    if (!isTokenValid()) {
      await generateNewToken();
    }
    const tokenObject = getTokenObject();
    operation.setContext({
      headers: {
        authorization: tokenObject.token,
      },
    });
  },
});
