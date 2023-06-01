import React from "react";
// import { useNavigate } from "react-router-dom";
import TrainingIcon from "@mui/icons-material/FitnessCenter";
import DieteIcon from "@mui/icons-material/DinnerDining";
import CalendarIcon from "@mui/icons-material/CalendarMonth";
import DashboardIcon from "@mui/icons-material/Dashboard";
// import AddIcon from '@mui/icons-material/Add';
// import PersonIcon from '@mui/icons-material/Person';

const Footer = ({ currentPath }) => {
  // const navigate = useNavigate();

  // const logOut = () => {
  //   localStorage.removeItem("auth");
  //   navigate("/login");
  // };
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <a href="/" className={currentPath === "/" ? "active" : ""}>
              <DashboardIcon />
            </a>
          </li>
          <li>
            <a href="/login">
              <TrainingIcon />
            </a>
          </li>
          <li>
            <a href="/diete">
              <DieteIcon />
            </a>
          </li>
          <li>
            <a href="/calendar">
              <CalendarIcon />
            </a>
          </li>
          {/* <li onClick={logOut}>Se déconnecter</li> */}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
