import React from "react";
import { FaGithubSquare } from "react-icons/fa";

const Header = () => {
  return (
    <header className="pa3 bg-green shadow-4">
      <h2 className="mv0 white flex items-center justify-between">
        <a
          className="link dim white"
          href="https://devnow.vn/?p=3305"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vọc cùng Thành #15
        </a>
        <a
          className="link dim white"
          href="https://github.com/EGANY-Team/vct-15-chrome-extension"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithubSquare />
        </a>
      </h2>
    </header>
  );
};

export default Header;
