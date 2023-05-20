import React from "react";
// import { useAuth } from "../../context/auth";
import logo from "../assets/logo-entraine-toi.png";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-smaller" />
      </div>
      <button
        className="icon-header"
        onClick={() => {
          navigate("/profil");
        }}
      >
        <PersonIcon sx={{ fontSize: 25 }} />
      </button>
    </header>
  );
};

export default Header;
