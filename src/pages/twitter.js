import TwitterHandleForm from "../components/twitterHandleForm";
import NewLens from "../components/newLens";
import { useState } from "react";

const Twitter = () => {
  const [twitterHandle, setTwitterHandle] = useState("@you");
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
        <NewLens
          twitterHandle={twitterHandle}
          setTwitterHandle={setTwitterHandle}
        />
      </>
    );
  }
};

export default Twitter;
