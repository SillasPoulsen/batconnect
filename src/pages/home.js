   
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { ethers } from "ethers";
import { ApolloClient, ApolloProvider, InMemoryCache, useQuery, gql } from '@apollo/client'
import Hero from "../components/Hero";


const Home = ({setProfileToggle, setEthAddress, allProfiles}) => {
  const [currentAccount, setCurrentAccount] = useState("");

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
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
  }

  const APIURL = 'https://api-mumbai.lens.dev/';
    
    const client = new ApolloClient({
      uri: APIURL,
      cache: new InMemoryCache(),
    })
  
// CHANGE BELOW TO {"profileIds" : [currentAccount]}

  const request = {"ownedBy" : [currentAccount]}

  console.log("requeeest:", currentAccount)
  
  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])




  return (
    <ApolloProvider client={client}>
      <Hero setProfileToggle={setProfileToggle} setEthAddress={setEthAddress} allProfiles={allProfiles} request={request} currentAccount={currentAccount}/>
    </ApolloProvider>
  );
};

export default Home;
