import "./index.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import ConnectTwitterPage from "./Pages/ConnectTwitterPage/ConnectTwitterPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";

function App() {
  const [Name, setName] = useState({
    Name: "FracaShawG"
  });
  const [profile, setProfile] = useState({
    Name: "Name",
    image:
      "https://twitter.com/" + Name.Name + "/photo",
    Bio: ""
  });
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/connect"
            element={<ConnectTwitterPage profile={profile} />}
          />
          <Route
            path="/profile/:id"
            element={<ProfilePage profile={profile} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
