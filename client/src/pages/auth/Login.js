import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/auth.scss";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useAuth } from "../../context/auth";
import logo from '../../assets/logo-entraine-toi.png';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        {
          email,
          password,
        }
      );
      if (res && res.data.success) {
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        console.log(location.state);
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Vérifier si l'utilisateur est authentifié
    const isAuthenticated = localStorage.getItem("auth");

    if (isAuthenticated) {
      navigate(location.state || "/");
    }
  }, [auth, navigate, location.state]);

  

  return (
    <div className="register">
      <div className="register-container">
        <div className="entete">
          <img src={logo} alt="Logo" className="logo-medium"/>
          <h1 className="">Se Connecter</h1>
          <p className="small">
            Connectez-vous maintenant pour accéder à vos exercices et à la
            musique enregistrée.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className="w-100"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="InputEmail"
            placeholder="Nom d'utilisateur ou Email"
            required
          />
          <div className="position-relative">
            <input
              className="me-2 w-100"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="InputPassword"
              placeholder="Mot de passe"
              required
            />
            <button
              className="position-absolute right-0 centre-vertic icon"
              type="button"
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
            </button>
          </div>
          <button
            className="link smaller w-100 text-right"
            onClick={() => {
              navigate("/forgot-password");
            }}
          >
            Mot de passe oublié ?
          </button>
          <button className="button w-100" type="submit">
            Se connecter
          </button>
          <div className="d-flex justify-content-center">
            <p>Pas encore inscrit ?</p>
            <button
              className="link"
              type="button"
              onClick={() => {
                navigate("/register");
              }}
            >
              S'inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
