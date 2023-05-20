import React from "react";
// import { useAuth } from "../../context/auth";
import logo from '../assets/logo-entraine-toi.png';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo" className="logo-petit" />

    </header>
  );
};

export default Header;
