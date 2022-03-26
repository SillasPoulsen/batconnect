import { gql } from '@apollo/client/core';
import { BigNumber, utils } from 'ethers';
import { apolloClient } from '../apollo-client';
import { login } from './login';
import { ethers } from 'ethers';
import { pollUntilIndexed } from '../indexer/has-transaction-been-indexed';

const CREATE_PROFILE = `
  mutation($request: CreateProfileRequest!) { 
    createProfile(request: $request) {
      ... on RelayerResult {
        txHash
      }
      ... on RelayError {
        reason
      }
			__typename
    }
 }
`;

const createProfileRequest = (createProfileRequest: {
  handle: string;
  profilePictureUri?: string;
  followNFTURI?: string;
  bio?: string;
}) => {
  return apolloClient.mutate({
    mutation: gql(CREATE_PROFILE),
    variables: {
      request: createProfileRequest,
    },
  });
};

export const createProfile = async (handle: string, profilePictureUri?: string, bio?: string) => {
  
  if(!window.ethereum)
    throw new Error("No crypto wallet found, please instal Metamask")
  await window.ethereum.send("eth_requestAccounts");
    
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner();
  const address = await signer.getAddress();
  
  console.log('create profile: address', address);

  await login(address);
  

  const createProfileResult = await createProfileRequest({
    handle: handle,
    profilePictureUri: profilePictureUri,
    bio: bio
  });

  console.log('create profile: poll until indexed');
  const result = await pollUntilIndexed(createProfileResult.data.createProfile.txHash);

  console.log('create profile: profile has been indexed', result);

  const logs = result.txReceipt.logs;

  console.log('create profile: logs', logs);

  const topicId = utils.id(
    'ProfileCreated(uint256,address,address,string,string,address,bytes,string,uint256)'
  );
  console.log('topicid we care about', topicId);

  const profileCreatedLog = logs.find((l: any) => l.topics[0] === topicId);
  console.log('profile created log', profileCreatedLog);

  let profileCreatedEventLog = profileCreatedLog.topics;
  console.log('profile created event logs', profileCreatedEventLog);

  const profileId = utils.defaultAbiCoder.decode(['uint256'], profileCreatedEventLog[1])[0];

  console.log('profile id', BigNumber.from(profileId).toHexString());

  return result.data;
};