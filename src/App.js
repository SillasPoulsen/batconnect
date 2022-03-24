import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Menu from "./pages/menu";
import Footer from "./components/Footer";
import Dropdown from "./components/Dropdown";
import Twitter from "./pages/Twitter";
import FollowMyFriends from "./pages/followMyFriends";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  //useEffect creates functions that automatically hides menu based on screen width
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/about" component={About} />
        <Route path="/twitter" component={Twitter} />
        <Route path="/friends" component={FollowMyFriends} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
