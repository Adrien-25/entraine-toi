import React from "react";
// import "../styles/profile.scss";
import PersonIcon from "@mui/icons-material/Person";
import FlecheDroite from '@mui/icons-material/KeyboardArrowRight';

const Profil = () => {
  return (
    <div className="profil">
      <h1>Profil</h1>
      <div className="presentation">
        <div className="general">
          <div className="image-profil"></div>
        </div>
        <div className="measures">
          <ul>
            <li className="mesure"></li>
            <li className="mesure"></li>
            <li className="mesure"></li>
          </ul>
        </div>
      </div>
      <div className="personnalisation">
        <ul className="personnalisation-list">
          <li className="personnalisation-item">
          <PersonIcon color="white"/>
          <span>Mes informations</span>
          <FlecheDroite color="white"/>
          </li>
          <li className="personnalisation-item"></li>
          <li className="personnalisation-item"></li>
          <li className="personnalisation-item"></li>
          <li className="personnalisation-item"></li>
        </ul>
      </div>
    </div>
  );
};

export default Profil;
