import { useState } from "react";
import TwitterHandleFormForFollowMyFriends from "../components/twitterHandleFormForFollowMyFriends";
import ListOfFriends from "../components/ListOfFriends";

const FollowMyFriends = ({twitterHandle, setTwitterHandle}) => {
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
        <ListOfFriends twitterHandle={twitterHandle} />
      </>
    );
  }
};

export default FollowMyFriends;
