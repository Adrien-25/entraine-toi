import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/auth.scss";
import { useAuth } from "../../context/auth";
import logo from "../../assets/logo-entraine-toi.png";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const [auth, setAuth] = useAuth();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/register`,
        {
          name,
          email,
          password,
          phone,
          address,
          answer,
        }
      );
      if (res.data.success) {
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        console.log(location.state);
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        // toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      // toast.error('Something went wrong');
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
          <img src={logo} alt="Logo" className="logo-medium" />

          <h1 className="mb-5">S'inscrire</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className="me-2 "
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="InputName"
            label="Enter Your Name"
            placeholder="Nom"
            variant="filled"
            required
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="InputEmail"
            label="Enter Your Email"
            placeholder="Email"
            variant="filled"
            required
          />

          <div className="mb-4">
            <input
              className="me-2 w-100"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="InputPassword"
              label="Enter Your Password"
              placeholder="Mot de passe"
              variant="filled"
              required
            />
          </div>
          {/* <div className="mb-4">
              <input
                className="me-2 w-100"
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                id="InputAnswer"
                label="What is Your Favorite Sport ? "
                placeholder="Quelle est votre sport favori ?"
                variant="filled"
                required
              />
            </div> */}
          {/* <div className="mb-4 d-flex">
              <input
                className="me-2 "
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                id="InputPhone"
                label="Enter Your Phone"
                placeholder="Téléphone"
                variant="filled"
                required
              />
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                id="InputAddress"
                label="Enter Your Address"
                placeholder="Adresse postale"
                variant="filled"
                required
              />
            </div> */}

          <button className="button w-100" type="submit" variant="contained">
            S'inscrire
          </button>
          <div className="d-flex justify-content-center">
            <p>Déjà inscrit ?</p>
            <button
              className="link"
              type="button"
              onClick={() => {
                navigate("/login");
              }}
            >
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
