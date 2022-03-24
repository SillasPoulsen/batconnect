import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import './index.css';

const APIURL = 'https://api-mumbai.lens.dev/';

export const apolloClient = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache()
});

ReactDOM.render(
 <Router>
    <Auth0ProviderWithHistory>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById("root")
);
