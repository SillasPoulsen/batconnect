import React from "react";

const Footer = ({ ...otherProps }) => {
  return (
    <footer className="bg-purple-800 text-gray-100 flex flex-row flex items-center h-30px">
      <div className="w-full max-w-7xl mx-auto">
        <span className="font-medium">
          Built in a cave under{" "}
          <a
            href="https://www.42lisboa.com/en/"
            className="text-gray-100 font-medium"
          >
            42 Lisboa
          </a>
        </span>
      </div>
      <div className="w-full max-w-7xl mx-auto">
        <a
          href="https://github.com/SillasPoulsen/batconnect"
          className="text-gray-100 font-medium"
        >
          OpenBat Github
        </a>
      </div>
    </footer>
  );
};

export default Footer;
