import React from "react";
const logo = "https://images.newscientist.com/wp-content/uploads/2021/02/09145420/h82g6f_web.jpg";
const Footer = () => (
  <footer className="bg-light p-3 text-center">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <p>
      Projecr created by some cool students{" "}
      <a target="_blank" rel="noopener noreferrer" href="https://www.42lisboa.com/en/">
      @42Lisboa
      </a>
    </p>
  </footer>
);

export default Footer;
