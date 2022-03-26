import { apolloClient  } from "../index.js";
import { gql } from "@apollo/client"

export const profileQuery = `
  query($request: ProfileQueryRequest!) {
    profiles(request: $request) {
      items {
        id
        name
        bio
        location
        website
        twitterUrl
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
          __typename
        }
        handle
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
          __typename
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
            amount {
              asset {
                symbol
                name
                decimals
                address
              }
              value
            }
            recipient
          }
          __typename
        }
      }
      pageInfo {
        prev
        next
        totalCount
      }
    }
  }
`;

export interface ProfilesRequest {
  profileIds?: string[];
  ownedBy?: string;
  handles?: string[];
  whoMirroredPublicationId?: string;
}

export const getProfilesRequest = (request: ProfilesRequest) => {
  return apolloClient.query({
    query: gql(profileQuery),
    variables: {
      request,
    },
  });
};

export const profilesByHandler = async (handles: string[], request?: ProfilesRequest) => {

  if (!request) {
    request = { handles: handles };
  }
  
  const profilesFromProfileIds = await getProfilesRequest(request);
  console.log(profilesFromProfileIds.data);
  

  return profilesFromProfileIds.data;
};