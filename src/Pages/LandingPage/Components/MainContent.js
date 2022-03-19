import LoginButton from "./login-button";

export default function Maincontent() {
  return (
    <div className="main">
      <div className="leftside-content">
        <h1>Bring your followers to web3</h1>
        <p>Own your content, followers and income streams. </p>
        <LoginButton />
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
