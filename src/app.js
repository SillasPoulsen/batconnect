import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./pages/home";
import Profile from "./pages/profile";
import WhyLens from "./pages/whyLens";
import Footer from "./components/footer";
import Twitter from "./pages/twitter";
import FollowMyFriends from "./pages/followMyFriends";
import WalletProfile from "./pages/walletProfile";
import LensProfile from "./pages/lensProfile";
import ShareProfile from "./pages/shareProfile";
import "./app.css";

const App = () => {
  const [profileToggle, setProfileToggle] = useState(false);
  const [ethAddrees, setEthAddress] = useState("0x");
  const [allProfiles, setAllProfiles] = useState([]);

  console.log("this is the ethAddress in APP", ethAddrees);

  return (
    <div id="app" className="bg-purple-200">
      <Router>
        <NavBar profileToggle={profileToggle} ethAddress={ethAddrees} />
        <Routes>
          <Route
            path="/lensprofile/:ethAddress"
            exact
            element={
              <WalletProfile
                allProfiles={allProfiles}
                setAllProfiles={setAllProfiles}
              />
            }
          />
          <Route
            path="/lensprofile/:ethAddress/:id"
            element={<LensProfile />}
          />
          <Route
            path="/"
            element={
              <Home
                setProfileToggle={setProfileToggle}
                setEthAddress={setEthAddress}
                allProfiles={allProfiles}
              />
            }
          />
          <Route path="/whylens" element={<WhyLens />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/twitter" element={<Twitter />} />
          <Route path="/friends" element={<FollowMyFriends />} />
          <Route
            path="/lensprofile/:ethAddress"
            exact
            element={<WalletProfile />}
            ethAddress={ethAddrees}
          />
          <Route path="/menu" element={<WhyLens />} />
          <Route
            path="/twitter"
            element={<Twitter ethAddress={ethAddrees} />}
          />
          <Route path="/friends" element={<FollowMyFriends />} />
          <Route path="/lensprofile/:ethAddress" element={<WalletProfile />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
