import React from "react";
import { Fragment, useState, useEffect } from "react";
import axios from "axios"
import config from "../config";

const baseURL = "https://api.twitter.com/2/";

const NewLens = () => {
  const [lensHandle, setLensHandle] = useState('@you');
  const [lensBio, setLensBio] = useState('Bio');
  const [lensImage, setLensImage] = useState("https://pbs.twimg.com/profile_images/1445430578443169796/JH226P-D_400x400.jpg");
  const [toggle, setToggle] = useState(true);

  if (toggle){
    return (
      <Fragment>
        <form>
        <img src={lensImage}/>
        <button type="button" onClick={() =>{setToggle(false)}}>Change Profile Picture</button>
        <label htmlFor="fname">Your new Lens Handle</label>
          <input 
            type="text" 
            id="fname" 
            name="fname" 
            value={lensHandle}
            onChange={(e) => setLensHandle(e.target.value)}
          ></input>
          <label htmlFor="fname">Your new Lens Bio</label>
          <input 
            type="text" 
            id="fname" 
            name="fname" 
            value={lensBio}
            onChange={(e) => setLensBio(e.target.value)}
          ></input>
        </form>
        <button type="button">Mint my Lens profile !</button>
      </Fragment>
    );
  }
  else{
    return(
      <Fragment>
      <img src={lensImage}/>
      <form>
        <button type="button" onClick={() =>{setToggle(true)}}>Change Profile Picture</button>
        <label htmlFor="fname">Your Lens Profile Picture URL</label>
        <input 
          type="text" 
          id="fname" 
          name="fname" 
          value={lensImage}
          onChange={(e) => setLensImage(e.target.value)}
        ></input>
        <label htmlFor="fname">Your new Lens Handle</label>
        <input 
          type="text" 
          id="fname" 
          name="fname" 
          value={lensHandle}
          onChange={(e) => setLensHandle(e.target.value)}
        ></input>
        <label htmlFor="fname">Your new Lens Bio</label>
        <input 
          type="text" 
          id="fname" 
          name="fname" 
          value={lensBio}
          onChange={(e) => setLensBio(e.target.value)}
        ></input>
      </form>
      <button type="button">Mint my Lens profile !</button>
    </Fragment>
    )
  }
};

export default NewLens;