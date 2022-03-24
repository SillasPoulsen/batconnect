import { gql } from '@apollo/client';
import { apolloClient } from '../apollo-client';
import { signText } from '../ethers.service';
import {  setAuthenticationToken, getAuthenticationToken } from '../state';


const GET_CHALLENGE = `
  query($request: ChallengeRequest!) {
    challenge(request: $request) { text }
  }
`;

export const generateChallenge = (address: string) => {
  return apolloClient.query({
    query: gql(GET_CHALLENGE),
    variables: {
      request: {
        address,
      },
    },
  });
};

const AUTHENTICATION = `
  mutation($request: SignedAuthChallenge!) { 
    authenticate(request: $request) {
      accessToken
      refreshToken
    }
 }
`;

const authenticate = (address: string, signature: string | undefined) => {
  return apolloClient.mutate({
    mutation: gql(AUTHENTICATION),
    variables: {
      request: {
        address,
        signature,
      },
    },
  });
};

export const login = async (address : string) => {

  if (getAuthenticationToken()) {
    console.log('login: already logged in');
    return;
  }  

  const challengeResponse = await generateChallenge(address);

  console.log("the hole challenge response",challengeResponse);
  
  const signature = await signText(challengeResponse.data.challenge.text);

  console.log("ok so far", "signature:", signature);

  const accessTokens = await authenticate(address, signature);

  console.log("access token", accessTokens);


  setAuthenticationToken(accessTokens.data.authenticate.accessToken);

  return accessTokens.data;
};
