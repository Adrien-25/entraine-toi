import React from "react";
import styles from "../../styles/_profile.module.scss";

const ReglagesGeneraux = () => {
  return (
    <div className={styles.mesInfos}>
      <h1>Réglages Généraux</h1>
      <div className={styles.infosContainer}>
        <ul className={styles["infos-list"]}>
          <li>
            <span className={styles["infos-list"]}>
              Réinitialiser les données
            </span>
          </li>
          <li>
            <span className={styles["infos-list"]}>Supprimer le compte</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReglagesGeneraux;
