import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  useQuery,
} from "@apollo/client";
import { gql } from "@apollo/client";

const Query = () => {
  const APIURL = "https://api-mumbai.lens.dev/";

  const client = new ApolloClient({
    uri: APIURL,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <h1>Boa Tarde</h1>
    </ApolloProvider>
  );
};

export default Query;
