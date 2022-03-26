import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CreateProfileButton from "./createProfileButton";

const NewLens = ({ twitterHandle, setTwitterHandle, setToggle}) => {
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
  }, [twitterHandle]);

    return (
      <div className="h-screen bg-slate-50 flex justify-center items-center w-full">
      <form >
        <div className="bg-white py-2 rounded-xl w-screen shadow-md max-w-sm">
          <span className="text-gray-300 ml-2" onClick={() => { setToggle(true) }}> ← back </span>
          <div className="px-10 py-8">
            <img className="h-14 mb-4 mx-auto rounded-full" src={lensImage} alt="" />
            <div className="space-y-4">
              <h1 className="text-center text-2xl font-semibold text-gray-600">Register</h1>
              <div>
                <label for="img_url" className="block mb-1 text-gray-600 font-semibold">Profile Image URL</label>
                <input type="text" 
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
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
            <CreateProfileButton
                lensBio={lensBio}
                lensHandle={lensHandle}
                lensImage={lensImage}
              />
            </div>
          </div>
      </form>
</div>
    );
};

export default NewLens;