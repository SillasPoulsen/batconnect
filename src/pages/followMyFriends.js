import { useState } from "react";
import TwitterHandleFormForFollowMyFriends from "../components/twitterHandleFormForFollowMyFriends";
import ListOfFriends from "./ListOfFriends.js";

const FollowMyFriends = ({twitterHandle, setTwitterHandle, ethAddress}) => {
  const [toggle, setToggle] = useState(false);

  console.log("twitterHandle", twitterHandle);
  if (twitterHandle === "@you" || toggle) {
    return (
      <>
        <TwitterHandleFormForFollowMyFriends
          twitterHandle={twitterHandle}
          setTwitterHandle={setTwitterHandle}
          setToggle={setToggle}
        />
      </>
    );
  } else {
    return (
      <>
        <ListOfFriends twitterHandle={twitterHandle} ethAddress={ethAddress} />
      </>
    );
  }
};

export default FollowMyFriends;
