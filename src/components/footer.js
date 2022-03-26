import React from "react";

const Footer = ({ ...otherProps }) => {
  return (
    <footer className="bg-purple-800 text-gray-100 flex flex-row max-h-100px">
      <div className="w-full max-w-7xl mx-auto">
        <span className="font-medium">
          Built in a cave under{" "}
          <a
            href="https://www.42lisboa.com/en/"
            className="text-base font-medium hover:text-black"
          >
            42 Lisboa
          </a>
        </span>
      </div>
      <div className="w-full max-w-7xl mx-auto">
        <a
          href="https://github.com/SillasPoulsen/batconnect"
          className="text-base font-medium hover:text-black"
        >
          OpenBat Github
        </a>
      </div>
    </footer>
  );
};

export default Footer;
