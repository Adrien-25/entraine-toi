import React from "react";
// import "../styles/profile.scss";
import PersonIcon from "@mui/icons-material/Person";
import FlecheDroite from "@mui/icons-material/KeyboardArrowRight";
import CloseIcon from "@mui/icons-material/Close";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/DisplaySettings";
import styles from '../styles/_profile.module.scss';

const Profil = () => {
  return (
//     <div className={styles.profile}>
//   {/* ... contenu de votre composant ... */}
//   <div className={styles.presentation}>
//     {/* ... autres éléments ... */}
//     <div className={styles.personnalisation}>
//       {/* ... autres éléments ... */}
//       <ul className={styles['personnalisation-list']}>
//         {/* ... autres éléments ... */}
//         <li className={styles['personnalisation-item']}>
//           {/* ... contenu de chaque élément ... */}
//           <div className={styles['MuiSvgIcon-root']}>
//             {/* ... contenu de l'icône ... */}
//           </div>
//         </li>
//         {/* ... autres éléments ... */}
//       </ul>
//     </div>
//   </div>
// </div>

    <div className={styles.profile}>
      <h1>Profil</h1>
      <div className={styles.presentation}>
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
      <div className={styles.personnalisation}>
        <ul className={styles['personnalisation-list']}>
          <li className={styles['personnalisation-item']}>
            <PersonIcon color="white" />
            <span>Mes informations</span>
            <FlecheDroite color="white" />
          </li>
          <li className={styles['personnalisation-item']}>
            <SettingsIcon color="white" />
            <span>Réglages Généraux</span>
            <FlecheDroite color="white" />
          </li>
          <li className={styles['personnalisation-item']}>
            <NotificationsIcon color="white" />
            <span>Notifications</span>
            <FlecheDroite color="action" />
          </li>
          <li className={styles['personnalisation-item']}>
            <QuestionMarkIcon color="white" />
            <span>Aide</span>
            <FlecheDroite color="white" />
          </li>
          <li className={styles['personnalisation-item']}>
            <CloseIcon color="white" />
            <span>Déconnexion</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profil;
