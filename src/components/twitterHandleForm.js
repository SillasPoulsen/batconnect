import React from "react";
import { Fragment, useState } from "react";
import { Link } from 'react-router-dom'

const TwitterHandleForm = ({twitterHandle, setTwitterHandle}) => {
  return (
    <Fragment>
      <form>
        <label htmlFor="fname">Your Twitter Handle</label>
        <input 
          type="text" 
          id="fname" 
          name="fname" 
          value={twitterHandle}
          onChange={(e) => setTwitterHandle(e.target.value)}
        ></input>
        <p>{twitterHandle}</p>
      </form>
      <Link className='p-4' to='/newlens'>newlens</Link>
    </Fragment>
  );
};

export default TwitterHandleForm;