import React from "react";

const TwitterHandleForm = ({ setTwitterHandle, setToggle }) => {
  return (
    <>
      <div className="h-screen bg-gray-200  dark:bg-gray-800   flex flex-wrap items-center  justify-center">
        <form className="m-4 flex" onSubmit={() => setToggle(false)}>
          <input
            className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
            placeholder="@Your Twitter Handle"
            onChange={(e) => setTwitterHandle(e.target.value)}
          />
          <button
            className="px-8 rounded-r-lg bg-purple-400  text-gray-800 font-bold p-4 uppercase border-purple-500 border-t border-b border-r"
            onClick={() => {
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

export default TwitterHandleForm;
