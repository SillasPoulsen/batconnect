import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ profileToggle, ethAddress }) => {
  console.log(ethAddress);
  if(profileToggle == true){
    return (
      <nav
        className="flex justify-between item-center h-16 bg-violet-300  text-black relatove pt-5 shadow-sm font-mono"
        role="navigation"
      >
        <Link to="/" className="pl-8">
          🦇OpenBat.co🦇
        </Link>
        <div className="px-4 cursor-pointer md:hidden" >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="pr-8 md:block hidden">
          <Link className="p-4" to="/">
            Home
          </Link>
          <Link className="p-4" to={"/lensprofile/" + ethAddress}>
            Profile
          </Link>
          <Link className="p-4" to="/menu">
            Why Lens
          </Link>
          <Link className="p-4" to="/Twitter">
            Connect Twitter
          </Link>
          <Link className="p-4" to="/friends">
            Follow my Friends
          </Link>
        </div>
      </nav>
    );
  } else {
    return(
      <nav
          className="flex justify-between item-center h-16 bg-violet-300  text-black relatove pt-5 shadow-sm font-mono"
          role="navigation"
        >
          <Link to="/" className="pl-8">
            🦇OpenBat.co🦇
          </Link>
          <div className="px-4 cursor-pointer md:hidden" >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <div className="pr-8 md:block hidden">
            <Link className="p-4" to="/">
              Home
            </Link>
            <Link className="p-4" to="/menu">
              Why Lens
            </Link>
            <Link className="p-4" to="/Twitter">
              Connect Twitter
            </Link>
            <Link className="p-4" to="/friends">
              Follow my Friends
            </Link>
          </div>
        </nav>
    );
  }
};

export default NavBar;
