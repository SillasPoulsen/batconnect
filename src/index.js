import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import './index.css';

const APIURL = 'https://api-mumbai.lens.dev/';

export const apolloClient = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache()
});

ReactDOM.render(
 <Router>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
  </Router>,
  document.getElementById("root")
);
