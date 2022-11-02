import React from "react";
import logo from "../img/logo.svg";

const Logo = () => {
  return (
    <div className="container-logo wrapper">
      <img className="logo" src={logo} alt="" />
      <p>React Counter</p>
    </div>
  );
};

export default Logo;
