import React from 'react';

const Suivi = () => {
  return (
    <div>
      <div className={styles["overviewContainer"]}>
        <div className={styles["scrollContainer"]}></div>
        <div className={styles["poidsOverview"]}></div>
      </div>
      <div className={styles["progressContainer"]}>
        <div className={styles["trackerPas"]}></div>
        <div className={styles["trackerEau"]}></div>
      </div>
    </div>
  );
}

export default GestionEntrainement;
