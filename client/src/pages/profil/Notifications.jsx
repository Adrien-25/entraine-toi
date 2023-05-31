import React from "react";
import styles from "../../styles/_profile.module.scss";

const Notifications = () => {
  return (
    <div className={styles.notifications}>
      <h1>Notifications</h1>
      <div className={styles.notifsContainer}>
        <ul className={styles["infos-list"]}>
          <li>
            <span className={styles["infos-list"]}>
              Me rappeler de me peser
            </span>
          </li>
          <li>
            <span className={styles["infos-list"]}>Rappel d'entraînement</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
