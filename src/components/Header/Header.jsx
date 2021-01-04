import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img
        src="data:image/png;base64,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"
        alt=""
      ></img>
    </header>
  );
};

export default Header;
