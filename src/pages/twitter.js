import TwitterHandleForm from "../components/twitterHandleForm";
import NewLens from "../components/newLens";
import { useState } from "react";

const Twitter = ({ ethAddress }) => {
  const [twitterHandle, setTwitterHandle] = useState("@you");
  const [toggle, setToggle] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {toggle ? (
        <TwitterHandleForm
          twitterHandle={twitterHandle}
          setTwitterHandle={setTwitterHandle}
          setToggle={setToggle}
        />
      ) : (
        <NewLens
          twitterHandle={twitterHandle}
          setTwitterHandle={setTwitterHandle}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setToggle={setToggle}
          ethAddress={ethAddress}
        />
      )}
    </>
  );
};

export default Twitter;
