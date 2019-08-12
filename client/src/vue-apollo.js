/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import VueApollo from 'vue-apollo';
import { isSignatureValid, generateNewSignature, getSignatureObject } from './auth';

// Install the vue plugin
Vue.use(VueApollo);

const httpLink = new HttpLink({
  uri: process.env.VUE_APP_GRAPHQL_URL,
});

const middlewareLink = setContext(async () => {
  if (!isSignatureValid()) {
    await generateNewSignature();
  }
  const signatureObject = getSignatureObject();
  return {
    headers: {
      authorization: signatureObject.signature,
      'Cascade-UserId': signatureObject.userId,
      'Cascade-signature-expiry': signatureObject.expiry,
    },
  };
});

const link = middlewareLink.concat(httpLink);

const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  persisting: false,
  websocketsOnly: false,
  ssr: false,
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

export default apolloProvider;
