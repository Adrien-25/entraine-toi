import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import CreationEntrainement from "./pages/CreationEntrainement";
import GestionEntrainement from "./pages/GestionEntrainement";
import GestionDiete from "./pages/GestionDiete";
import Profil from "./pages/Profil";
import "./styles/global.scss";
import { useAuth } from "./context/auth";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();

  // Vérifiez si la route actuelle correspond à '/login' ou '/register'
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";

  // Rendre le header et le footer uniquement pour les autres pages
  const shouldRenderHeaderFooter = !(isLoginPage || isRegisterPage);

  const checkAuthentication = () => {
    console.log("checkauth");
    const isAuthenticated = localStorage.getItem("auth");
    if (!isAuthenticated && location.pathname !== "/login" && location.pathname !== "/register") {
      navigate("/login");
    }
  };
  useEffect(() => {
    checkAuthentication();
  }, [navigate]);

  useEffect(() => {
    // window.addEventListener("storage", checkAuthentication);
    window.addEventListener("storage", () => {
      console.log("Test");
    });

    return () => {
      window.removeEventListener("storage", checkAuthentication);
    };
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
          <Route path="/gestion-diete" element={<GestionDiete />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </div>
      {shouldRenderHeaderFooter && <Footer />}
    </>
  );
}

export default App;

// import React from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer';
// // import { BrowserRouter as  Route, Routes } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Login from './pages/Login';
// import Register from './pages/Register';
// import Dashboard from './pages/Dashboard';
// import CreationEntrainement from './pages/CreationEntrainement';
// import GestionEntrainement from './pages/GestionEntrainement';
// import GestionDiete from './pages/GestionDiete';
// import Profil from './pages/Profil';

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Header />
//         <main>
//           <Routes>
//             <Route exact path="/" element={<Dashboard/>} />
//             <Route path="/login" element={<Login/>} />
//             <Route path="/register" element={<Register/>} />
//             <Route path="/dashboard" element={<Dashboard/>} />
//             <Route path="/creation-entrainement" element={<CreationEntrainement/>} />
//             <Route path="/gestion-entrainement" element={<GestionEntrainement/>} />
//             <Route path="/gestion-diete" element={<GestionDiete/>} />
//             <Route path="/profil" element={<Profil/>} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
