import React, { useEffect, useState } from "react";
import NavBar from "./components/navBar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";
import WhyLens from "./pages/whyLens";
import Footer from "./components/Footer";
import Twitter from "./pages/twitter";
import FollowMyFriends from "./pages/followMyFriends";
import WalletProfile from "./pages/walletProfile";
import LensProfile from "./pages/lensProfile";

const App = () => {

  return (
    <div id="app">
      <NavBar />
        <Switch>
          {/* <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route
            path="/lensprofile/:ethAddress"
            exact component={WalletProfile}
          />
          <Route
            path="/lensprofile/:ethAddress/:id"
            exact component={LensProfile}
          /> */}
        <Route path="/" exact component={Home} />
        <Route path="/menu" component={WhyLens} />
        <Route path="/profile" component={Profile} />
        <Route path="/twitter" component={Twitter} />
        <Route path="/friends" component={FollowMyFriends} />
        <Route 
          path="/lensprofile/:ethAddress" 
          exact component={WalletProfile}
        />
        <Route 
          path="/lensprofile/:ethAddress/:id" 
          exact component={LensProfile}
        />

        </Switch>
      <Footer />
    </div>
  );
};

export default App;
