import AuthenticationButton from "./authentication-button";
import LogoutButton from "./logout-button";
import { useAuth0 } from "@auth0/auth0-react";
export default function Maincontent({setProfile}) {
  const { user } = useAuth0();
  //const { name, picture, email } = user;
  console.log(user);
  //setProfile(user)
  return (
    <div className="main">
      <div className="leftside-content">
        <h1>Bring your followers to web3</h1>
        <p>Own your content, followers and income streams. </p>
        <AuthenticationButton />
        <LogoutButton />
        <a className="signup-btn" href="google.com">
          Connect twitter
        </a>
      </div>
      <div className="rightside-content">
        <img src="https://i.ibb.co/KKp2TS1/Group-17-1.png" alt="illustration" />
      </div>
    </div>
  );
}
