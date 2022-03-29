import React from "react";
import { follow } from "../services/follow";

const FollowButtonSmall = ({ ethAddress, id }) => {
  const handleFollow = () => {
    const profileId = id;

    follow(profileId);
  };
  return (
      <button
        onClick={() => handleFollow()}
        className="h-7 px-4 text-purple-100 transition-colors duration-150 bg-purple-600 rounded-full focus:shadow-outline hover:bg-purple-700"
      >
        Follow
      </button>
  );
};

export default FollowButtonSmall;
