import {
    ApolloClient,
    ApolloLink,
    HttpLink,
    InMemoryCache,
  } from '@apollo/client/core';
  import fetch from 'cross-fetch';
  import { LENS_API } from './config';
  import { getAuthenticationToken } from './state';
  
  const httpLink = new HttpLink({
    uri: LENS_API,
    fetch,
  });
  
  const authLink = new ApolloLink((operation, forward) => {
    const token = getAuthenticationToken();
    console.log('jwt token:', token);
  
    operation.setContext({
      headers: {
        'x-access-token': token ? `Bearer ${token}` : '',
      },
    });
    
    console.log(operation);
    
    return forward(operation);
  });
  
  export const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });