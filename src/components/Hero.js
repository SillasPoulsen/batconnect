import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { ethers } from "ethers";
import { ApolloClient, ApolloProvider, InMemoryCache, useQuery, gql } from '@apollo/client'



const QUERY_PROFILE = gql`
  	query($request: ProfileQueryRequest!) {
    profiles(request: $request) {
      items {
        id
        name
        bio
        location
        website
        twitterUrl
		handle
		stats {
			totalFollowers
			totalFollowing
			totalPosts
			totalComments
			totalMirrors
			totalPublications
			totalCollects
		  }
		  picture {
			... on MediaSet {
			  original {
				url
			  }
			}
		  }
  }
  }
  }
`;





const Hero = ({ setProfileToggle, setEthAddress, allProfiles, request, currentAccount }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [lens, setLens] = useState(false);
  const  data = useQuery(QUERY_PROFILE, {
    variables: { request },
  });

  console.log(lens)
  console.log("ooooo", data)

  useEffect(() => {
    if(data && data.profiles.items.length != 0) {
      setLens(true);
    }
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });



      

  /**
   * Implement your connectWallet method here
   */
  
  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      <h1 className="lg:text-8xl md:text:8xl sm:text-5xl text-5xl text-black mb-14 animate-bounce my-10 mt-0 font-medium font-black></div>">
        🦇 FLY TO WEB3 🦇
      </h1>
      <p className="mb-2">
        Take your twitter account to WEB3, in less than 2 minutes
      </p>
      {!currentAccount && !lens && (
        <button
          onClick={connectWallet}
          className="text-gray-100 font-mono py-6 px-10 shadow-xl bg-purple-800 rounded-full text-3xl hover:bg-purple-900 transition duration-300 ease-in-out flex items-center"
        >
          Connect your wallet
        </button>
      )} 
      {currentAccount && !lens && (
        <Link
          to='/twitter'
          className="text-gray-100 font-mono py-6 px-10 shadow-xl bg-purple-800 rounded-full text-3xl hover:bg-purple-900 transition duration-300 ease-in-out flex items-center; hover:text-black "
        >
          🧛🏽 Connected ➡
        </Link>
      )}
      {currentAccount && lens && (
        <Link
          to='/lensProfile'
          className="text-gray-100 font-mono py-6 px-10 shadow-xl bg-purple-800 rounded-full text-3xl hover:bg-purple-900 transition duration-300 ease-in-out flex items-center; hover:text-black "
        >
          🧛🏽 Connected ➡
        </Link>
      )}
    </div>
  );
};

export default Hero;
