import React from "react";
import { useParams } from "react-router-dom";

function ShareProfile() {
  let { ethAddress } = useParams();

  return (
    <>
      <div className="h-screen bg-gray-200  dark:bg-gray-800   flex flex-wrap items-center  justify-center">
        <form className="m-4 flex">
          <input
            className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
            placeholder="@Your Twitter Handle"
            value={`http://localhost:3000/lensprofile/${ethAddress}`}
            readOnly
          />
          <button
            className="px-8 rounded-r-lg bg-purple-400  text-gray-800 font-bold p-4 uppercase border-purple-500 border-t border-b border-r"
            onClick={() => {
              navigator.clipboard.writeText(
                `http://localhost:3000/lensprofile/${ethAddress}`
              );
            }}
          >
            Copy link
          </button>
        </form>
      </div>
    </>
  );
}

export default ShareProfile;
