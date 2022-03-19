import { useState } from "react";

export default function Landingpage() {
  const [profile, setProfile] = useState({
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    Name: "Name",
    Bio: "",
  });

  return (
    <div>
      <img
        className="profile-picture"
        src={profile.image}
        alt="profilepicture"
      />
      <h3>{profile.Name}</h3>
      <p>Bio:{profile.bio}</p>
      <a className="signup-btn" href="google.com">
        Mint NFT
      </a>
    </div>
  );
}
