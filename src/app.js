import React from "react";
import { Route, Switch } from "react-router-dom";
import { NavBar, Footer } from "./components";
import { Home, LensProfile, Profile, WalletProfile } from "./pages";

import "./app.css";

const App = () => {

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route
            path="/lensprofile/:ethAddress"
            exact component={WalletProfile}
          />
          <Route
            path="/lensprofile/:ethAddress/:id"
            exact component={LensProfile}
          />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
