import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const APIURL = 'https://api-mumbai.lens.dev/';

  export const apolloClient = new ApolloClient({
    uri: APIURL,
    cache: new InMemoryCache()
  });

ReactDOM.render(
  <>
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
  </>,
  document.getElementById("root")
);
