import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles/_profile.module.scss";

import PersonIcon from "@mui/icons-material/Person";
import FlecheDroite from "@mui/icons-material/KeyboardArrowRight";
import CloseIcon from "@mui/icons-material/Close";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/DisplaySettings";
// import CreateIcon from "@mui/icons-material/Create";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Profil = () => {
  const navigate = useNavigate();

  const navigateToInformations = () => {
    navigate("mes-informations");
  };
  const navigateToReglages = () => {
    navigate("reglages-generaux");
  };
  const navigateToNotifications = () => {
    navigate("notifications");
  };
  const navigateToAide = () => {
    navigate("aide");
  };

  const logOut = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <div className={styles.profile}>
      <h1>Profil</h1>
      <div className={styles.presentation}>
        <div className={styles["general"]}>
          <div className={styles["imageProfil"]}>
            <AccountCircleIcon />
          </div>
          <div className={styles["information"]}>
            <p>
              <span className="prenom">Adrien</span>
              <span> </span>
              <span className="nom">SCHMIDT</span>
            </p>
            <p>
              <span className="age">25</span>
              <span className="annee">ans</span>
            </p>
          </div>
        </div>
        <ul className={styles["mesures"]}>
          <li>
            <span>Taille</span>
            <strong>
              <span>190</span>
              <span> cm</span>
            </strong>
          </li>
          <li>
            <span>Poids actuel</span>
            <strong>
              <span>96</span>
              <span> kg</span>
            </strong>
          </li>
          <li>
            <span>Objectif</span>
            <strong>Stabiliser mon poids</strong>
          </li>
        </ul>
      </div>
      <div className={styles.personnalisation}>
        <ul className={styles["personnalisation-list"]}>
          <li
            className={styles["personnalisation-item"]}
            onClick={navigateToInformations}
          >
            <PersonIcon />
            <span>Mes informations</span>
            <FlecheDroite />
          </li>
          <li
            className={styles["personnalisation-item"]}
            onClick={navigateToReglages}
          >
            <SettingsIcon />
            <span>Réglages Généraux</span>
            <FlecheDroite color="white" />
          </li>
          <li
            className={styles["personnalisation-item"]}
            onClick={navigateToNotifications}
          >
            <NotificationsIcon />
            <span>Notifications</span>
            <FlecheDroite color="white" />
          </li>
          <li
            className={styles["personnalisation-item"]}
            onClick={navigateToAide}
          >
            <QuestionMarkIcon />
            <span>Aide</span>
            <FlecheDroite color="white" />
          </li>
          <li className={styles["personnalisation-item"]} onClick={logOut}>
            <CloseIcon />
            <span>Déconnexion</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profil;
