import React from "react";
import Hero from "../components/Hero";

const Home = ({setProfileToggle, setEthAddress, allProfiles}) => {
  return (
    <>
      <Hero setProfileToggle={setProfileToggle} setEthAddress={setEthAddress} allProfiles={allProfiles} />
    </>
  );
};

export default Home;
