import React from "react";
import logo from "../assets/Fill 213.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="logo" />
      <h1 className="header">my travel journal</h1>
    </div>
  );
};

export default Navbar;
