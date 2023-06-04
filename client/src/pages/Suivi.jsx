import React from "react";
import styles from "../styles/_suivi.module.scss";

import ImgVerre from "../assets/verreEau.png";
import ImgWalking from "../assets/walking.png";
import ImgPas from "../assets/tracePas.png";
import ImgGoutte from "../assets/GoutteEau.png";
import ImgGoal from "../assets/Goal.png";
import ImgBadge from "../assets/Badge.png";
import ImgVolume from "../assets/Volume.png";
import ImgBalance from "../assets/Balance.png";
import ImgChrono from "../assets/Chronometre.png";
import ImgCalories from "../assets/Calories.png";
import ImgDrapeau from "../assets/Drapeau.png";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const Suivi = () => {
  const faitPas = 6000;
  const objectifPas = 10000;

  const percentagePas = (faitPas / objectifPas) * 100;
  const circleKcal =
    "conic-gradient(#ffb3b0 " +
    percentagePas +
    "% , rgba(255,255,255,0.2) 17%)";

  const faitEau = 2;
  const objectifEau = 8;

  const percentageEau = (faitEau / objectifEau) * 100;
  const circleEau =
    "conic-gradient(#ffb3b0 " +
    percentageEau +
    "% , rgba(255,255,255,0.2) 17%)";

  return (
    <div className={styles.suivi}>
      <div className={styles["overviewContainer"]}>
        {/* Scroll */}
        <div className={styles["scrollContainer"]}>
          {/* Calories */}
          <div className={`${styles["calorieOverview"]} ${styles.active} `}>
            {/* className={styles["calorieOverview"]} */}
            <p className={styles["title"]}>
              <span>Calories </span>(Kcal)
            </p>
            <p className={styles["number"]}>962.2</p>
            <p>Total</p>
            <div className={styles["weekTracking"]}>
              <p>Cette semaine</p>
              <p>0.0</p>
            </div>
          </div>
          {/* Training */}
          <div className={styles["trainingOverview"]}>
            <p className={styles["title"]}>
              <span>Training </span>(Kcal)
            </p>
            <p className={styles["number"]}>962.2</p>
            <p>Total</p>
            <div className={styles["weekTracking"]}>
              <p>Cette semaine</p>
              <p>0.0</p>
            </div>
          </div>
          {/* Nav */}
          <div className={styles["navButtons"]}>
            <div className={`${styles["navCalorie"]} ${styles.active} `}></div>
            <div className={styles["navTraining"]}></div>
          </div>
        </div>
        {/* Poids */}
        <div className={styles["poidsOverview"]}>
          <p className={styles["title"]}>
            <span>Poids </span>(Kg)
          </p>
          <p className={styles["number"]}>94.0</p>
          <p>Aujourd'hui</p>
          <div className={styles["separator"]}></div>
          <div className={styles["weekTracking"]}>
            <p>30 derniers jours</p>
            <p>0.0</p>
          </div>
        </div>
      </div>
      <div className={styles["progressContainer"]}>
        <div className={styles["trackerPas"]}>
          <div className={styles["title"]}>
            <img src={ImgPas} alt="Trace de pas" />
            <h6>Tracker de Pas</h6>
          </div>
          <div
            className={styles["radialProgressBar"]}
            style={{
              background: circleKcal,
            }}
          >
            <div className={styles["overlay"]}>
              <img src={ImgWalking} alt="Marcheur" />
              <div>
                <h2>{faitPas}</h2>
                <p className={styles["text"]}>/ {objectifPas}</p>
              </div>
            </div>
          </div>
          <button className="button button-rose button-petit">Détails</button>
        </div>
        <div className={styles["trackerEau"]}>
          <div className={styles["title"]}>
            <img src={ImgGoutte} alt="Goutte d'eau" />

            <h6>Suivi d'Eau</h6>
          </div>
          <div
            className={styles["radialProgressBar"]}
            style={{
              background: circleEau,
            }}
          >
            <div className={styles["overlay"]}>
              <img src={ImgVerre} alt="Verre d'eau " />
              <div>
                <h2>{faitEau}</h2>
                <p className={styles["text"]}>/ {objectifEau} verres</p>
              </div>
            </div>
          </div>
          <div className={styles["buttonContainer"]}>
            <RemoveCircleIcon />
            <AddCircleIcon className="color-rose" />
          </div>
        </div>
      </div>
      {/* Défi */}
      <div className={styles["defiContainer"]}>
        <div className={styles["title"]}>
          <img src={ImgGoal} alt="Cible avec flèche" />
          <h6>Défi quotidien</h6>
        </div>
        <div className={styles["separator"]}></div>
        <div className={styles["content"]}>
          <div className={styles["entete"]}>
            <img src={ImgDrapeau} alt="drapeau" />
            <p>Planche</p>
          </div>
          <div className={styles["global"]}>

          </div>
          <button className="button button-rose button-petit">Défi</button>

        </div>
      </div>
      <div className={styles["suivipoidsContainer"]}>
        <div className={styles["title"]}>
          <img src={ImgVolume} alt="Mesure poids" />
          <h6>Prise de poids</h6>
        </div>
      </div>
      <div className={styles["entrainementContainer"]}>
        <div className={styles["title"]}>
          <img src={ImgChrono} alt="Chronomètre" />

          <h6>Entraînements</h6>
        </div>
      </div>
      <div className={styles["caloriesContainer"]}>
        <div className={styles["title"]}>
          <img src={ImgCalories} alt="Calories" />

          <h6>Calories</h6>
        </div>
      </div>
    </div>
  );
};

export default Suivi;
