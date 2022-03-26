import TwitterHandleForm from "../components/twitterHandleForm";
import NewLens from "../components/newLens";
import { useState } from "react";

const Twitter = () => {
  const [twitterHandle, setTwitterHandle] = useState("@you");
  const [toggle, setToggle] = useState(true);

  return (
    <>
      { toggle ? (
          <TwitterHandleForm
            twitterHandle={twitterHandle}
            setTwitterHandle={setTwitterHandle}
            setToggle={setToggle}
          />
        ):(
          <NewLens
            twitterHandle={twitterHandle}
            setTwitterHandle={setTwitterHandle}
            setToggle={setToggle}
          />
      )
      }
    </>
  )
};

export default Twitter;
