import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = ({ setProfileToggle, setEthAddress }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div className="h-screen bg-violet flex flex-col justify-center items-center">
      <h1 className="lg:text-8xl md:text:8xl sm:text-5xl text-5xl text-black mb-14 animate-bounce">
        🦇 FLY TO WEB3 🦇
      </h1>
      <p>Take your twitter account to WEB3, in less than 2</p>
      {!currentAccount && (
        <button
          onClick={connectWallet}
          className="text-violet-600  font-mono py-6 px-10 bg-white rounded-full text-3xl hover:bg-black transition duration-300 ease-in-out flex items-center"
        >
          Connect your wallet
        </button>
      )}
      {currentAccount && (
        <Link
          to="/about"
          className="text-violet-600 font-mono py-6 px-10 bg-white rounded-full text-3xl hover:bg-black transition duration-300 ease-in-out flex items-center animate-bounce"
        >
          🦇Connected. Go to next step🦇
        </Link>
      )}
    </div>
  );
};

export default Hero;
