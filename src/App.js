import "./index.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import ConnectTwitterPage from "./Pages/ConnectTwitterPage/ConnectTwitterPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./Pages/LandingPage/Components/loading";

function App() {
  const [profile, setProfile] = useState({
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    Name: "Name",
    Bio: "",
  });
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="App">
          <Route path="/" element={<LandingPage setProfile={setProfile} />} />
          <Route
            path="/connect"
            element={<ConnectTwitterPage profile={profile} />}
          />
          <Route
            path="/profile/:id"
            element={<ProfilePage profile={profile} />}
          />
    </div>
  );
}

export default App;
