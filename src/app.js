import React from "react";
import { Route, Switch } from "react-router-dom";
import { NavBar, Footer } from "./components";
import { Home, LensProfile, Profile, WalletProfile } from "./pages";

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
        <Route path="/menu" component={Menu} />
        <Route path="/about" component={About} />
        <Route path="/twitter" component={Twitter} />
        <Route path="/friends" component={FollowMyFriends} />

        </Switch>
      <Footer />
    </div>
  );
};

export default App;
