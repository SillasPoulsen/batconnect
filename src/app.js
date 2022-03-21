import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { NavBar, Footer, Loading } from "./components";
import { Home, LensProfile, Profile, WalletProfile } from "./pages";
import ProtectedRoute from "./auth/protected-route";

import "./app.css";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/profile" component={Profile} />
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
