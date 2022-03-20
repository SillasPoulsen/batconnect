import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const letstry = () => {
    
    const hey = loginWithRedirect();
    console.log("this is the hey", hey)
  }
  return (
    <button
      className="signup-btn"
      onClick={letstry}
    >
      Log In
    </button>
  );
};

export default LoginButton;
