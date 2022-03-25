import React from "react";
import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import CreateProfileButton from "./createProfileButton";

const NewLens = ({ twitterHandle, setTwitterHandle }) => {
  const [lensBio, setLensBio] = useState("Bio");
  const [lensHandle, setLensHandle] = useState(twitterHandle);
  const [lensImage, setLensImage] = useState(
    "https://www.handiclubnimois.fr/wp-content/uploads/2020/10/blank-profile-picture-973460_1280.png"
  );

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/user/" + twitterHandle.replace("@", ""))
      .then((res) => {
        setLensBio(res.data.user.bio);
        setLensImage(
          res.data.user.profileImageUrl.replace("_normal", "_bigger")
        );
      });
  }, []);

    return (
      <div className="h-screen bg-slate-50 flex justify-center items-center w-full">
  <form>
    <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
      <img className="h-14 mb-4 mx-auto" src={lensImage} alt="" />
      <div className="space-y-4">
        <h1 className="text-center text-2xl font-semibold text-gray-600">Register</h1>
        <div>
          <label for="img_url" className="block mb-1 text-gray-600 font-semibold">Profile Image URL</label>
          <input type="text" 
          className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" v
          value={lensImage} 
          onChange={(e) => setLensImage(e.target.value)}/>
        </div>
        <div>
          <label for="Handle" className="block mb-1 text-gray-600 font-semibold">Handle</label>
          <input type="text" 
          className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" 
          value={lensHandle}
          onChange={(e) => setLensHandle(e.target.value)} />
        </div>
        <div>
          <label for="Bio" className="block mb-1 text-gray-600 font-semibold">Bio</label>
          <input type="text" 
          className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" 
          value={lensBio}
          onChange={(e) => setLensBio(e.target.value)} />
        </div>
      </div>
      <button className="mt-4 w-full bg-purple-500 font-semibold py-2 rounded-md  tracking-wide">MINT</button>
    </div>
  </form>
</div>
    );
};

export default NewLens;


{/* <Fragment>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <img
            src={lensImage}
            className="inline object-cover w-20 h-20 mr-2 rounded-full center"
          />
          <button
            className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={() => {
              setToggle(false);
            }}
          >
            Change Profile Picture
          </button>
          <label className="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4">
            Your new Lens Handle
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            value={lensHandle}
            onChange={(e) => setLensHandle(e.target.value)}
          ></input>
          <label className="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4">
            Your new Lens Bio
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            value={lensBio}
            onChange={(e) => setLensBio(e.target.value)}
          ></input>
        </form>
        <CreateProfileButton lensBio={lensBio} lensHandle={lensHandle} lensImage={lensImage} />
      </Fragment> */}