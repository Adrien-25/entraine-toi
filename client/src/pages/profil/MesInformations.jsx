import React from "react";
import styles from "../../styles/_profile.module.scss";

const MesInformations = () => {
  return (
    <div className={styles.mesInfos}>
      <h1>Mes informations</h1>
      <div className={styles.infosContainer}>
        <ul className={styles["infos-list"]}>
          <li>
            <span>Nom d'utilisateur</span>
            <span className={styles["infos-list"]}>adrienschmidt</span>
          </li>
          <li>
            <span>E-mail</span>
            <span className={styles["infos-list"]}>adrien.schmid7@gmail.com</span>
          </li>
          <li>
            <span>Mot de passe</span>
            <span className={styles["infos-list"]}>********</span>
          </li>
          <li>
            <span>Date de naissance</span>
            <span className={styles["infos-list"]}>20/06/1997</span>
          </li>
          <li>
            <span>Sexe</span>
            <span className={styles["infos-list"]}>adrienschmidt</span>
          </li>
          <li>
            <span>Langue</span>
            <span className={styles["infos-list"]}>adrienschmidt</span>
          </li>
          <li>
            <span>Pays</span>
            <span className={styles["infos-list"]}>adrienschmidt</span>
          </li>
          <li>
            <span>Fuseau horaire</span>
            <span className={styles["infos-list"]}>adrienschmidt</span>
          </li>
          <li>
            <span>Taille</span>
            <span className={styles["infos-list"]}>190<span> cm</span></span>
          </li>
          <li>
            <span>Poids</span>
            <span className={styles["infos-list"]}>96<span> kg</span></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MesInformations;
