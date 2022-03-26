// this is showing you how you use it with react for example
// if your using node or something else you can import using
// @apollo/client/core!
import { apolloClient } from '../apollo-client';
import { gql } from '@apollo/client'


const GET_FOLLOWERS = `
  query($request: FollowersRequest!) {
    followers(request: $request) { 
	   items {
        wallet {
          address
          defaultProfile {
            id
            name
            bio
            location
            website
            twitterUrl
            handle
            picture {
              ... on NftImage {
                contractAddress
                tokenId
                uri
                verified
              }
              ... on MediaSet {
                original {
                  url
                  mimeType
                }
              }
            }
            coverPicture {
              ... on NftImage {
                contractAddress
                tokenId
                uri
                verified
              }
              ... on MediaSet {
                original {
                  url
                  mimeType
                }
              }
            }
            ownedBy
            depatcher {
              address
              canUseRelay
            }
            stats {
              totalFollowers
              totalFollowing
              totalPosts
              totalComments
              totalMirrors
              totalPublications
              totalCollects
            }
            followModule {
              ... on FeeFollowModuleSettings {
                type
                contractAddress
                amount {
                  asset {
                    name
                    symbol
                    decimals
                    address
                  }
                  value
                }
                recipient
              }
            }
          }
        }
        totalAmountOfTimesFollowed
      }
      pageInfo {
        prev
        next
        totalCount
      }
    }
  }
`;

const followersRequest = (profileId: string) => {
    return apolloClient.query({
      query: gql(GET_FOLLOWERS),
      variables: {
        request: {
          profileId,
          limit: 10,
        },
      },
    });
  };

  export const followers = async (profileId: string) => {
    if (!profileId) {
      throw new Error('Must define PROFILE_ID in the .env to run this');
    }
  
    const result = await followersRequest(profileId);
  
    return result.data;
  };