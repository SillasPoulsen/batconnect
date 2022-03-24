import React from "react";
import { Route, Switch } from "react-router-dom";
import { NavBar, Footer } from "./components";
import { Home, LensProfile, Profile, WalletProfile } from "./pages";

const App = () => {

  return (
    <div id="app">
      <NavBar />
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
      <Footer />
    </div>
  );
};

export default App;
