import React from "react";
import { useState } from "react/cjs/react.production.min";

const twitterHandleForm = () => {
  const {twitterHandle, setTwitterHandle} = useState('');
  return (
    <form>
      <label for="fname">Your Twitter Handle</label>
      <input 
        type="text" 
        id="fname" 
        name="fname" 
        value={twitterHandle}
        onChange={(e) => setTwitterHandle(e.target.value)}
      ></input>
    </form>
  );
};

export default LoginButton;