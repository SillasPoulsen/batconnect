import "./index.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import ConnectTwitterPage from "./Pages/ConnectTwitterPage/ConnectTwitterPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";

function App() {
  const [profile, setProfile] = useState({
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    Name: "Name",
    Bio: "",
  });
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
