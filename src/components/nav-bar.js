import React from "react";

import MainNav from "./main-nav";
import AuthNav from "./auth-nav";
import MetamaskButton from "./metamask-button"

const logo = "https://images.newscientist.com/wp-content/uploads/2021/02/09145420/h82g6f_web.jpg";
const NavBar = () => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
        <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
          <MainNav />
          <AuthNav />
          <MetamaskButton />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
