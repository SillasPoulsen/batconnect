import React from "react";
import { Fragment, useState, useEffect } from "react";
import axios from "axios"

const baseURL = "https://api.twitter.com/2/";

const NewLens = ({twitterHandle, setTwitterHandle}) => {
  const [lensBio, setLensBio] = useState('Bio');
  const [lensImage, setLensImage] = useState("https://pbs.twimg.com/profile_images/1445430578443169796/JH226P-D_400x400.jpg");
  const [toggle, setToggle] = useState(true);

  axios.get('http://127.0.0.1:5000/user/' + twitterHandle.replace('@', ''))
      .then(res => {
        setLensBio(res.data.user.bio);
        setLensImage(res.data.user.profileImageUrl.replace('_normal', ''));
      })

  if (toggle){
    return (
      <Fragment>
        <img src={lensImage} class="inline object-cover w-30 h-30 mr-2 rounded-full center"/>
        <form>
        <button className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={() =>{setToggle(false)}}>Change Profile Picture</button>
        <label className="block text-gray-500 font-bold md:text_center mb-1 md:mb-0 pr-4">Your new Lens Handle</label>
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text" 
            value={twitterHandle}
            onChange={(e) => setTwitterHandle(e.target.value)}
          ></input>
          <label className="block text-gray-500 font-bold md:text_center mb-1 md:mb-0 pr-4">Your new Lens Bio</label>
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text" 
            value={lensBio}
            onChange={(e) => setLensBio(e.target.value)}
          ></input>
        </form>
        <button className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">Mint my Lens profile !</button>
      </Fragment>
    );
  }
  else{
    return(
      <Fragment>
      <img src={lensImage} class="inline object-cover w-30 h-30 mr-2 rounded-full"/>
      <form>
        <button className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={() =>{setToggle(true)}}>Done changing my profile URL</button>
        <label className="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4" for="inline-full-name">Your Lens Profile Picture URL</label>
        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text" 
          value={lensImage}
          onChange={(e) => setLensImage(e.target.value)}
        ></input>
        <label className="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4" for="inline-full-name">Your new Lens Handle</label>
        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text" 
          value={twitterHandle}
          onChange={(e) => setTwitterHandle(e.target.value)}
        ></input>
        <label className="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4" for="inline-full-name">Your new Lens Bio</label>
        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"  
          value={lensBio}
          onChange={(e) => setLensBio(e.target.value)}
        ></input>
      </form>
      <button className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Mint my Lens profile !</button>
    </Fragment>
    )
  }
};

export default NewLens;