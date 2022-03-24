import React from "react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import lensHubABI from "../../abi/lensHubABI.json";

import { useAuth0 } from "@auth0/auth0-react";

const CONTRACT_ADDRESS = "0x9BB48d8F9c4596b98C8bB1fB6D67aaE238F81CC2";

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;
  
  const [currentAccount, setCurrentAccount] = useState("");
  const checkIfWalletIsConnected = async () => {
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
      console.log("Found an authorized account: PS(WE ARE RUNNING THIS TWICE) ", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  };

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

  const askContractToCreateProfile = async () => {
    try {
      const { ethereum } = window;
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(
          CONTRACT_ADDRESS,
          lensHubABI,
          signer
        );

        const profileData = {
          to: '0x42d9179A8C77ef0914Be0320cf74a10a75d3548f',
          handle: 'myHandle',
          imageURI: 'myImgURI',
          followModule: '0x0000000000000000000000000000000000000000',
          followModuleData: [],
          followNFTURI: 'myNFTPic'
        };
        console.log(profileData);

        console.log("Going to pop wallet now to pay gas...");
        let nftTxn = await connectedContract.proxyCreateProfile(profileData);

        console.log("Mining...please wait.");
        await nftTxn.wait();
        console.log(nftTxn);
        console.log(
          `Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
        );
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  });

  const renderMintUI = () => (
    <button
      onClick={askContractToCreateProfile}
      className="cta-button connect-wallet-button"
    >
      Mint NFT
    </button>
  );

  const renderNotConnectedContainer = () => (
    <button
      onClick={connectWallet}
      className="cta-button connect-wallet-button"
    >
      Connect to Wallet
    </button>
  );
  return (
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
      <div>
        {currentAccount === "" ? renderNotConnectedContainer() : renderMintUI()}
      </div>
    </div>
  );
};


export default Profile;

