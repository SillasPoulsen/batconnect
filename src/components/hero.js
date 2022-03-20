import React from "react";

const logo = "https://images.newscientist.com/wp-content/uploads/2021/02/09145420/h82g6f_web.jpg";

const Hero = () => (
  <div className="text-center hero">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">BatConnect</h1>
    <p className="lead">
    Bring your followers to web3 {" "}
    <p>Own your content, followers and income streams. </p>
    </p>
  </div>
);

export default Hero;
