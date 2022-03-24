import React from "react";
import { Fragment } from "react";

const TwitterHandleForm = ({ twitterHandle, setTwitterHandle }) => {
  return (
    <Fragment>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label className="block text-gray-500 font-bold md:text_center mb-1 md:mb-0 pr-4">
          Enter your Twitter Handle
        </label>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="inline-full-name"
          type="text"
          value={twitterHandle}
          onChange={(e) => setTwitterHandle(e.target.value)}
        ></input>
      </form>
    </Fragment>
  );
};

export default TwitterHandleForm;
