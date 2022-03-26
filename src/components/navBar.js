import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ profileToggle, ethAddress }) => {
  console.log(ethAddress);
  return (
    <>
      <div className="dark:bg-gray-900">
        <div>
          {/* !-- For md screen size */}
          <div class="relative">
            {/* For large screens */}
            <div class="dark:bg-gray-900 bg-purple-800 text-gray-100 px-6 py-9">
              <div class="container mx-auto flex items-center justify-between">
                <h1 class="md:w-2/12 cursor-pointer items-right dark:text-white" aria-label="the BatConnect.">
                  <Link to="/" className="pl-8 hover:text-black">
                    🦇 <span className="text-gray-100 hover:text-black">openBat</span><span className="text-gray-400">.co</span>
                  </Link> 
                </h1>
                <ul class="hidden w-8/12 md:flex items-left justify-left">
                  <li>
                    { profileToggle ?
                      <Link className="p-4 hover:text-black" to={"/lensprofile/" + ethAddress}>
                        Profiles
                      </Link>
                    : null }
                  </li>
                  <li>
                    <Link className="p-4 hover:text-black" to="/whylens">
                      Why Lens
                    </Link>
                  </li>
                  <li>
                    <Link className="p-4 hover:text-black" to="/twitter">
                      Connect Twitter
                    </Link>
                  </li>
                  <li>
                    <Link className="p-4 hover:text-black" to="/friends">
                      Follow my Friends
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> 
    </div> 
    </>
  )
};

export default NavBar;
