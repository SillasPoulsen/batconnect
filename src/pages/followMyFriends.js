import { useState } from "react";
import TwitterHandleForm from "../components/twitterHandleForm";
import ListOfFriends from "../components/ListOfFriends";

const FollowMyFriends = () => {
  const [twitterHandle, setTwitterHandle] = useState("@fracashawg");
  const [toggle, setToggle] = useState(true);

  if (toggle) {
    return (
      <>
        <TwitterHandleForm
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
        <ListOfFriends twitterHandle={twitterHandle} />
      </>
    );
  }
};

export default FollowMyFriends;
