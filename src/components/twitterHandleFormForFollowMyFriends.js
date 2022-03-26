import React from "react";
import { useState } from "react";

const TwitterHandleFormForFollowMyFriends = ({ setTwitterHandle, setToggle }) => {
  const [input, setInput] = useState("")

  return (
    <>
      <div className="h-screen dark:bg-gray-800   flex flex-wrap items-center  justify-center">
        <form className="m-4 flex" onSubmit={() => setToggle(false)}>
          <input
            className="rounded-l-full p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white focus:outline-none"
            placeholder="@Your Twitter Handle"
            onChange={(e) => setInput(e.target.value)}
            onSubmit={() => setTwitterHandle(input)}
          />
          <button
            className="px-8 rounded-r-full bg-purple-800 text-white  hover:text-black  text-gray-800 font-bold p-4 uppercase border-purple-500 border-t border-b border-r; hover:text-black hover:bg-purple-900 "
            onClick={() => {
              setTwitterHandle(input);
              setToggle(false);
            }}
          >
            Let's go
          </button>
        </form>
      </div>
    </>
  );
};

export default TwitterHandleFormForFollowMyFriends;
