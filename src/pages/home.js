import React from "react";
import Hero from "../components/Hero";

const Home = ({setProfileToggle}) => {
  return (
    <>
      <Hero setProfileToggle={setProfileToggle} />
    </>
  );
};

export default Home;
