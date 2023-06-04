import "./styles/global.scss";

import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import CreationEntrainement from "./pages/CreationEntrainement";
import GestionEntrainement from "./pages/GestionEntrainement";
import Diete from "./pages/Diete";
import Profil from "./pages/Profil";
import Suivi from "./pages/Suivi";

import MesInformations from "./pages/profil/MesInformations";
import ReglagesGeneraux from "./pages/profil/ReglagesGeneraux";
import Notifications from "./pages/profil/Notifications";
import Aide from "./pages/profil/Aide";
// import { useAuth } from "./context/auth";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  // const [auth, setAuth] = useAuth();

  // Vérifiez si la route actuelle correspond à '/login' ou '/register'
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";

  // Rendre le header et le footer uniquement pour les autres pages
  const shouldRenderHeaderFooter = !(isLoginPage || isRegisterPage);

  const checkAuthentication = () => {
    console.log("checkauth");
    const isAuthenticated = localStorage.getItem("auth");
    if (
      !isAuthenticated &&
      location.pathname !== "/login" &&
      location.pathname !== "/register"
    ) {
      navigate("/login");
    }
  };
  useEffect(() => {
    checkAuthentication();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    window.addEventListener("storage", () => {
      console.log("Test");
    });

    return () => {
      window.removeEventListener("storage", checkAuthentication);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {shouldRenderHeaderFooter && <Header />}
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/creation-entrainement"
            element={<CreationEntrainement />}
          />
          <Route
            path="/gestion-entrainement"
            element={<GestionEntrainement />}
          />
          <Route path="/diete" element={<Diete />} />
          <Route path="/suivi" element={<Suivi />} />

          <Route path="/profil/" element={<Profil />} />
          <Route
            path="/profil/mes-informations"
            element={<MesInformations />}
          />
          <Route path="/profil/reglages-generaux" element={<ReglagesGeneraux />} />
          <Route path="/profil/notifications" element={<Notifications />} />
          <Route path="/profil/aide" element={<Aide />} />
        </Routes>
      </div>
      {shouldRenderHeaderFooter && <Footer currentPath={location.pathname} />}
    </>
  );
}

export default App;
