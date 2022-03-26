import { useState } from "react";
import TwitterHandleFormForFollowMyFriends from "../components/twitterHandleFormForFollowMyFriends";
import ListOfFriends from "../components/ListOfFriends";

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
        <button
          className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setToggle(true);
          }}
        >
          back
        </button>
        <ListOfFriends twitterHandle={twitterHandle} ethAddress={ethAddress} />
      </>
    );
  }
};

export default FollowMyFriends;
