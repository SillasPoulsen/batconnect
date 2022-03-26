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





const Hero = ({ setProfileToggle, setEthAddress, allProfiles, request }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [lens, setLens] = useState(false);
 const { loading, error, data } = useQuery(QUERY_PROFILE, {
  variables: { request },
  });

  useEffect(() => {
    if(data && data.profiles.items.length != 0) {
      setLens(true);
    }
  }, [data])

  useEffect(() => {
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

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
        setEthAddress(currentAccount);
        setProfileToggle(true);
        console.log("profileToggle ==> true");
      } else {
        console.log("No authorized account found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Implement your connectWallet method here
   */
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };
  checkIfWalletIsConnected();

  const redirect = () => {
    if (lens) {
      return "/lensprofile/" + currentAccount;
    } else {
      return "/twitter";
    }
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      <h1 className="lg:text-8xl md:text:8xl sm:text-5xl text-5xl text-black mb-14 animate-bounce my-10 mt-0 font-medium font-black></div>">
        🦇 FLY TO WEB3 🦇
      </h1>
      <p className="mb-5 text-3xl">
        Move your twitter to WEB3 in ⚡️
      </p>
      {!currentAccount ? (
        <button
          onClick={connectWallet}
          className="text-gray-100 font-mono py-6 px-10 shadow-xl bg-purple-800 rounded-full text-3xl hover:bg-purple-900 transition duration-300 ease-in-out flex items-center"
        >
          Connect your wallet
        </button>
      ) : (
        <Link
          to={redirect()}
          className="text-gray-100 font-mono py-6 px-10 shadow-xl bg-purple-800 rounded-full text-3xl hover:bg-purple-900 transition duration-300 ease-in-out flex items-center; hover:text-black "
        >
          🧛🏽 Connected ➡
        </Link>
      )}
    </div>
  );
};

export default Hero;
