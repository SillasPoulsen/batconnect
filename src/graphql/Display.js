import React from "react";
import { useQuery, gql } from "@apollo/client";

const QUERY_PROFILE = gql`
  query ping {
    ping
  }
`;

const Display = () => {
  const {} = useQuery();
  return <div></div>;
};

export default Display;
