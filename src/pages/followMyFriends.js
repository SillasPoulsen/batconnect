import { useState } from "react";
import TwitterHandleFormForFollowMyFriends from "../components/twitterHandleFormForFollowMyFriends";
import ListOfFriends from "./ListOfFriends.js";

const FollowMyFriends = ({twitterHandle, setTwitterHandle, ethAddress}) => {
  const [toggle, setToggle] = useState(false);

  console.log("twitterHandle", twitterHandle);
  return (
    <>
      {(twitterHandle === "@you" || toggle) ? 
          <TwitterHandleFormForFollowMyFriends
            twitterHandle={twitterHandle}
            setTwitterHandle={setTwitterHandle}
            setToggle={setToggle}
          />
          :
          <ListOfFriends twitterHandle={twitterHandle} ethAddress={ethAddress} />
      }
    </>
  )
};

export default FollowMyFriends;
