import { useState, useEffect } from "react";

import { ethers } from "ethers";

import lensHubABI from "../../utils/lensHubABI.json";

import { useAuth0 } from "@auth0/auth0-react";

// I moved the contract address to the top for easy access.
const CONTRACT_ADDRESS = "0x7c86e2a63941442462cce73EcA9F07F4Ad023261";
  
export default function Landingpage({ profile }) {
  const [currentAccount, setCurrentAccount] = useState("");
  const { user } = useAuth0();
  console.log(user)
  //const { name, picture, email } = user;
  //console.log(name);
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
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);

      // Setup listener! This is for the case where a user comes to our site
      // and ALREADY had their wallet connected + authorized.
      //setupEventListener();
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

      // Setup listener! This is for the case where a user comes to our site
      // and connected their wallet for the first time.
      //setupEventListener();
    } catch (error) {
      console.log(error);
    }
  };

  // Setup our listener.
  // const setupEventListener = async () => {
  //   // Most of this looks the same as our function askContractToMintNft
  //   try {
  //     const { ethereum } = window;

  //     if (ethereum) {
  //       // Same stuff again
  //       const provider = new ethers.providers.Web3Provider(ethereum);
  //       const signer = provider.getSigner();
  //       const connectedContract = new ethers.Contract(
  //         CONTRACT_ADDRESS,
  //         lensHubABI.abi,
  //         signer
  //       );

  //       // THIS IS THE MAGIC SAUCE.
  //       // This will essentially "capture" our event when our contract throws it.
  //       // If you're familiar with webhooks, it's very similar to that!
  //       connectedContract.on("NewEpicNFTMinted", (from, tokenId) => {
  //         console.log(from, tokenId.toNumber());
  //         alert(
  //           `Hey there! We've minted your NFT and sent it to your wallet. It may be blank right now. It can take a max of 10 min to show up on OpenSea. Here's the link: https://testnets.opensea.io/assets/${CONTRACT_ADDRESS}/${tokenId.toNumber()}`
  //         );
  //       });

  //       console.log("Setup event listener!");
  //     } else {
  //       console.log("Ethereum object doesn't exist!");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const askContractToCreateProfile = async () => {
    try {
      const { ethereum } = window;

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

        console.log("Going to pop wallet now to pay gas...");
        let nftTxn = await connectedContract.createProfile(profileData);

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
      <img
        className="profile-picture"
        src={profile.image}
        alt="profilepicture"
      />
      <h3>{profile.Name}</h3>
      <p>Bio:{profile.bio}</p>
      {currentAccount === "" ? renderNotConnectedContainer() : renderMintUI()}
    </div>
  );
}
