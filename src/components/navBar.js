import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ profileToggle, ethAddress }) => {
  console.log(ethAddress);
  return (
    <>
      <div class="dark:bg-gray-900">
        <div>
          {/* !-- For md screen size */}
          <div class="relative">
          {/* !-- For md screen size -- */}
            <div id="md-searchbar" class="bg-white dark:bg-gray-900 hidden lg:hidden py-5 px-6 items-center justify-between">
              <div class="flex items-center space-x-3 text-gray-800 dark:text-white">
                <div>
                  <svg class="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18.9984 18.9999L14.6484 14.6499" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <input type="text" placeholder="Search for products" class="text-sm leading-none dark:text-gray-300 dark:bg-gray-900 text-gray-600 focus:outline-none" />
              </div>
              <div class="space-x-6">
                <button aria-label="view favourites" class="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                  <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.8921 3.07357C13.5516 2.73291 13.1473 2.46267 12.7023 2.2783C12.2574 2.09392 11.7804 1.99902 11.2988 1.99902C10.8171 1.99902 10.3402 2.09392 9.89521 2.2783C9.45023 2.46267 9.04595 2.73291 8.70544 3.07357L7.99878 3.78024L7.29211 3.07357C6.60432 2.38578 5.67147 1.99938 4.69878 1.99938C3.72609 1.99938 2.79324 2.38578 2.10544 3.07357C1.41765 3.76137 1.03125 4.69422 1.03125 5.66691C1.03125 6.6396 1.41765 7.57245 2.10544 8.26024L2.81211 8.96691L7.99878 14.1536L13.1854 8.96691L13.8921 8.26024C14.2328 7.91974 14.503 7.51545 14.6874 7.07048C14.8718 6.6255 14.9667 6.14857 14.9667 5.66691C14.9667 5.18525 14.8718 4.70831 14.6874 4.26334C14.503 3.81836 14.2328 3.41408 13.8921 3.07357V3.07357Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
                <button aria-label="go to cart" class="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                  <svg class="fill-stroke" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.66667 1L1 4.2V15.4C1 15.8243 1.1873 16.2313 1.5207 16.5314C1.8541 16.8314 2.30628 17 2.77778 17H15.2222C15.6937 17 16.1459 16.8314 16.4793 16.5314C16.8127 16.2313 17 15.8243 17 15.4V4.2L14.3333 1H3.66667Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1 4.2002H17" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12.5564 7.3999C12.5564 8.2486 12.1818 9.06253 11.515 9.66264C10.8482 10.2628 9.94386 10.5999 9.00087 10.5999C8.05788 10.5999 7.15351 10.2628 6.48671 9.66264C5.81991 9.06253 5.44531 8.2486 5.44531 7.3999" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
            {/* !-- For md screen size -- */}
            {/* For large screens */}
            <div class="dark:bg-gray-900 bg-gray-50 px-6 py-9">
              <div class="container mx-auto flex items-center justify-between">
                <h1 class="md:w-2/12 cursor-pointer text-gray-800 dark:text-white" aria-label="the BatConnect.">
                  <Link to="/" className="pl-8">
                    🦇 openBat.co
                  </Link> 
                </h1>
                <ul class="hidden w-8/12 md:flex items-center justify-center space-x-8">
                  <li>
                    { profileToggle ?
                      <Link className="p-4" to={"/lensprofile/" + ethAddress}>
                        Profiles
                      </Link>
                    : null }
                  </li>
                  <li>
                    <Link className="p-4" to="/menu">
                      Why Lens
                    </Link>
                  </li>
                  <li>
                    <Link className="p-4" to="/Twitter">
                      Connect Twitter
                    </Link>
                  </li>
                  <li>
                    <Link className="p-4" to="/friends">
                      Follow my Friends
                    </Link>
                  </li>
                </ul>
                <div class="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8">
                </div>
              </div>
            </div>
          </div>
        </div> 
    </div> 
    </>
  )
};

export default NavBar;
