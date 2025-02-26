import React from "react";
import Logo from "../img/logo1.png";

const Footer = () => {
  return (
    <footer>
      
      <img src={Logo} alt="" />
      <div>
      <span>
        Made with ♥️ and <b>React.js</b>.
      </span>
      <span style={{display: "block"}}>
        by <b>Sinan</b> and <b>Sumith</b>.
      </span>
      </div>
    </footer>
  );
};

export default Footer;
