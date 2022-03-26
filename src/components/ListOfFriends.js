import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { profilesByHandler } from "../services/get-profiles-by-handle.ts";
import axios from "axios";


const ListOfFriends = ({ twitterHandle }) => {
  let [allProfiles, setAllProfiles] = useState([]);

  // const handleGetProfilesByHandler = () => {
  //   const profiles = profilesByHandler(twitterHandle);

  // }

  useEffect(() => {
    console.log(twitterHandle);
    axios
      .get("http://127.0.0.1:5000/friends/" + twitterHandle.replace("@", ""))
      .then(async (res) => {
        console.log(res.data.friends);
        const dataArray = await res.data.friends
        const result = await dataArray.map(a => a.screenName)
        const result2 = result.map((element) => element.replace(/[^a-zA-Z ]/g, ""));
        console.log("here ", result2);
        const friendsArray = await profilesByHandler(result2)
        setAllProfiles(friendsArray);
        console.log("hello!", allProfiles, typeof allProfiles);
      })
  }, [twitterHandle, allProfiles]);
  
  return (
  // <div> hello</div>
    <div className="flex flex-col items-center justify-center min-h-screen p-16 bg-slate-200">
      <p className="day" style={{ display: "inline-block" }}>
        Profiles owned by:
      </p>
      <h1 className="my-10 mt-0 font-medium text-3xl sm:text-4xl font-black">
      </h1>
      <div className="user-list w-full max-w-lg mx-auto bg-white rounded-xl shadow-xl flex flex-col py-4">
        {/* <!--User row --> */}
        { allProfiles.length === 0 ? (
            <Link 
              to="/twitter"
              className="text-gray-100 font-mono py-6 px-10 shadow-xl bg-purple-800 rounded-full mx-10 text-3xl justify-center hover:bg-purple-900 transition duration-300 ease-in-out flex items-center; hover:text-black"
            >
            No profile 😭 ➡</Link>
        ) : (
          allProfiles.profiles.items.map((address) => {
            return (
              <div
                key={address}
                className="user-row flex flex-col items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-[#f6f8f9]"
              >
                <div className="user flex items-center text-center flex-col sm:flex-row sm:text-left">
                  <div className="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
                    {address.picture ? (
                      <img
                        className="avatar w-20 h-20 rounded-full"
                        src={address.picture.original.url}
                        alt="profilepicture"
                      ></img>
                    ) : (
                      <img
                        className="avatar w-20 h-20 rounded-full"
                        src="https://cdn.britannica.com/21/75121-050-8CF5E1DB/Bats-structures-organs-sound-frequencies-signals-contexts.jpg"
                        alt="profilepicture"
                      ></img>
                    )}
                  </div>
                  <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
                    <a
                      href="google.com"
                      className="title font-medium no-underline"
                    >
                      {address.handle}
                    </a>
                  </div>
                </div>
              </div>
            );}))}
        </div>
    </div>
  );
};

export default ListOfFriends;
