import React from "react";
import Hero from "../components/Hero";

const Home = ({setProfileToggle, setEthAddress}) => {
  return (
    <>
      <Hero setProfileToggle={setProfileToggle} setEthAddress={setEthAddress} />
    </>
  );
};

export default Home;
