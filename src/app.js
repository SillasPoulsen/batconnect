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
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const APIURL = 'https://api-mumbai.lens.dev/';

  export const apolloClient = new ApolloClient({
    uri: APIURL,
    cache: new InMemoryCache()
  });
const App = () => {
  const [profileToggle, setProfileToggle] = useState(false);
  
  return (
    <div id="app">
      
      
        <Router>
        <NavBar profileToggle={profileToggle} />
        <ApolloProvider client={apolloClient}>
          <Routes>
            {/* <Route path="/" exact element={Home} />
            <Route path="/profile" element={Profile} />
            <Route
              path="/lensprofile/:ethAddress"
              exact element={WalletProfile}
            />
            <Route
              path="/lensprofile/:ethAddress/:id"
              exact element={LensProfile}
            /> */}
          <Route path="/" element={<Home setProfileToggle={setProfileToggle} />}  />
          <Route path="/menu" element={<WhyLens/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/twitter" element={<Twitter/>} />
          <Route path="/friends" element={<FollowMyFriends/>} />
          <Route 
            path="/lensprofile/:ethAddress" 
            exact element={<WalletProfile/>}
          />
          <Route 
            path="/lensprofile/:ethAddress/:id" 
            exact element={<LensProfile/>}
          />
          </Routes>
          </ApolloProvider>
          <Footer />
        </Router>
    
     
    </div>
  );
};

export default App;
