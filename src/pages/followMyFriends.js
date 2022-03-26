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
        <div className="bg-white rounded-xl w-screen shadow-md max-w-sm">
            <span
              className="text-gray-300 ml-2"
              onClick={() => {
                setToggle(true);
              }}
            >
              {" "}
              ← back{" "}
            </span>
            <div className="px-10 py-8">
        <ListOfFriends twitterHandle={twitterHandle} />
        </div>
        </div>
      </>
    );
  }
};

export default FollowMyFriends;
