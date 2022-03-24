import { useState } from "react";
import ListOfFriends from "../components/ListOfFriends";


const FollowMyFriends = () => {
  const [twitterHandle, setTwitterHandle] = useState("@you");

  return (
    <>
      <ListOfFriends twitterHandle={twitterHandle} />
    </>
  )
}

export default FollowMyFriends