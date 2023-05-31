import React from "react";
import styles from "../styles/_dashboard.module.scss";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowLeft from "@mui/icons-material/ArrowBackIosNew";
import ArrowRight from "@mui/icons-material/ArrowForwardIos";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import ImgPetiDej from "../assets/petitDej.png";
import ImgPates from "../assets/pates.png";
import ImgGouter from "../assets/gouter.png";
import ImgNouille from "../assets/nouille.png";
import ImgVerre from "../assets/verreEau.png";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import AddIcon from "@mui/icons-material/Add";

const Dashboard = () => {
  const percentageKcal = 66;
  const kcalResantes = 2230;
  const circleKcal =
    "conic-gradient(#ffb3b0 " +
    percentageKcal +
    "% , rgba(255,255,255,0.2) 17%)";

  const objectifGlucides = 399;
  const consoGlucides = 92;
  const progressGlucides = (consoGlucides / objectifGlucides) * 100;

  const objectifProteines = 539;
  const consoProteines = 52;
  const progressProteines = (consoProteines / objectifProteines) * 100;

  const objectifLipides = 709;
  const consoLipides = 576;
  const progressLipides = (consoLipides / objectifLipides) * 100;

  const selectDay = "Aujourdh’hui, 15 avr.";

  const nbreVerre = 8;
  const nbreVerreBu = 1;

  return (
    <div className={styles.dashboard}>
      <h1>Tableau de bord</h1>
      <div className={styles["trainingProgress"]}>
        <div className={styles["kcalExpend"]}>
          <h5>335</h5>
          <p>consommées</p>
        </div>
        <div className={styles["kcalOverview"]}>
          <div
            className={styles["radialProgressBar"]}
            style={{
              background: circleKcal,
            }}
          >
            <div className={styles["overlay"]}>
              <h2>{kcalResantes}</h2>
              <p className={styles["text"]}>kcal restants</p>
            </div>
          </div>
        </div>
        <div className={styles["kcalBurn"]}>
          <h5>540</h5>
          <p>brûlées</p>
        </div>
      </div>
      <div className={styles["dietProgress"]}>
        <div className={styles["glucideProgress"]}>
          <p>Glucides</p>
          <div className={styles["progressBar"]}>
            <div
              className={styles["progressDone"]}
              style={{ width: progressGlucides + "%" }}
            ></div>
          </div>
          <p>
            {consoGlucides}/{objectifGlucides}g
          </p>
        </div>
        <div className={styles["proteineProgress"]}>
          <p>Protéines</p>
          <div className={styles["progressBar"]}>
            <div
              className={styles["progressDone"]}
              style={{ width: progressProteines + "%" }}
            ></div>
          </div>
          <p>
            {consoProteines}/{objectifProteines}g
          </p>
        </div>
        <div className={styles["lipideProgress"]}>
          <p>Lipides</p>
          <div className={styles["progressBar"]}>
            <div
              className={styles["progressDone"]}
              style={{ width: progressLipides + "%" }}
            ></div>
          </div>
          <p>
            {consoLipides}/{objectifLipides}g
          </p>
        </div>
      </div>
      <div className={styles["addFood"]}>
        <div className={styles["navCalendar"]}>
          <ArrowLeft sx={{ fontSize: 12 }} />
          <div className={styles["selectDays"]}>
            <CalendarMonthIcon sx={{ fontSize: 12 }} />
            {selectDay}
          </div>
          <ArrowRight sx={{ fontSize: 12 }} />
        </div>
        <div className={styles["petitDej"]}>
          <div>
            <img src={ImgPetiDej} alt="Petit déjeuner" />
          </div>
          <div className={styles["content"]}>
            <p className={styles["title"]}>Petit déjeuner</p>
            <p className={styles["recommande"]}>Recommendés: 822 - 1151 kcal</p>
          </div>
          <AddCircleIcon sx={{ fontSize: 40 }} style={{ color: "#ffb3b0" }} />
        </div>
        <div className={styles["dejeuner"]}>
          <div>
            <img src={ImgPates} alt="Assiette de pâtes" />
          </div>
          <div className={styles["content"]}>
            <p className={styles["title"]}>Déjeuner</p>
            <p className={styles["recommande"]}>Recommendés: 822 - 1151 kcal</p>
          </div>
          <AddCircleIcon sx={{ fontSize: 40 }} style={{ color: "#ffb3b0" }} />
        </div>
        <div className={styles["collation"]}>
          <div>
            <img src={ImgGouter} alt="Collation pomme et boisson" />
          </div>
          <div className={styles["content"]}>
            <p className={styles["title"]}>Collation</p>
            <p className={styles["recommande"]}>Recommendés: 822 - 1151 kcal</p>
          </div>
          <AddCircleIcon sx={{ fontSize: 40 }} style={{ color: "#ffb3b0" }} />
        </div>
        <div className={styles["diner"]}>
          <div>
            <img src={ImgNouille} alt="Bol de nouille" />
          </div>
          <div className={styles["content"]}>
            <p className={styles["title"]}>Dîner</p>
            <p className={styles["recommande"]}>Recommendés: 822 - 1151 kcal</p>
          </div>
          <AddCircleIcon sx={{ fontSize: 40 }} style={{ color: "#ffb3b0" }} />
        </div>
        <div className={styles["verreEau"]}>
          <div className={styles["top"]}>
            <p>0,5L</p>
            <p>Eau</p>
            <MoreHorizIcon sx={{ fontSize: 20 }} style={{ color: "#999999" }} />
          </div>
          <div className={styles["bottom"]}>
            {Array.from({ length: nbreVerre }, (_, index) => (
              <div
                key={index}
                className={index >= nbreVerreBu ? styles["nonBu"] : ""}
              >
                <img
                  src={ImgVerre}
                  alt={index === nbreVerreBu ? "Verre d'eau" : "Verre d'eau bu"}
                />
                {index === nbreVerreBu && (
                  <AddIcon
                    className={styles["iconAdd"]}
                    sx={{ fontSize: 20 }}
                    style={{ color: "#999999" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles["listProgram"]}>
        <p className={styles["title"]}>Les programmes</p>
        <p className={styles["subTitle"]}>Équilibré</p>
        <div className={styles["programsContainer"]}>
          <div className={styles["program"]}>
            <p className={styles["categorie"]}>Programme alimentaire</p>
            <p className={styles["name"]}>Équilibre hormonal</p>
            <p className={styles["description"]}>Régime de 21 jours</p>
          </div>
          <div className={styles["program"]}>
            <p className={styles["categorie"]}>Programme alimentaire</p>
            <p className={styles["name"]}>Équilibre hormonal</p>
            <p className={styles["description"]}>Régime de 21 jours</p>
          </div>
          <div className={styles["program"]}>
            <p className={styles["categorie"]}>Programme alimentaire</p>
            <p className={styles["name"]}>Équilibre hormonal</p>
            <p className={styles["description"]}>Régime de 21 jours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
