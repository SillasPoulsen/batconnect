import React, { Fragment } from "react";

import { Hero } from "../components";
import Profile from "./profile";
import { useAuth0 } from "@auth0/auth0-react";


const Home = () => {
  const { isAuthenticated } = useAuth0();

  return !isAuthenticated ?  <Hero /> : <Profile/>;
};

export default Home;
