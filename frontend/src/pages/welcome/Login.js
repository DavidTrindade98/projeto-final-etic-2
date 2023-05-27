import "../../styles/welcome/login.css";
import "../../styles/welcome/login_or_signup.css";
import TopContainer from "../../components/TopContainer";
import Button from "../../components/Button";
import logo from "../../assets/logo.svg";
import facebook from "../../assets/facebook.svg";
import google from "../../assets/google.svg";
import apple from "../../assets/apple.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import eye_open from "../../assets/eye_open.svg";
import eye_closed from "../../assets/eye_closed.svg";

export default function Login() {
  const navigate = useNavigate();

  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setPasswordVisible((prevState) => !prevState);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const email = document.getElementById("E-mail").value;
    const password = document.getElementById("password").value;

    // Make an API request to authenticate the user
    fetch("http://localhost:8000/request/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Login failed");
        }
      })
      .then((data) => {
        const token = data.token;
        localStorage.setItem("authenticationToken", token);
        navigate("/TutorialSwiper");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <default-screen>
      <wrapper-screen>
        <TopContainer
          logoStyle={{ display: "none" }}
          backButtonFill="white"
          backClick={() => navigate("/LoginORSignup")}
        />
        <div className="logo-container">
          <img src={logo} id="logo" alt="logo" />
        </div>
        <div className="login">
          <div className="welcome-text-container">
            <h1>Log in</h1>
          </div>
          <form className="form-container" onSubmit={handleLogin}>
            <input type="email" id="E-mail" placeholder="E-mail" />
            <div className="password-input-container">
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                placeholder="Password"
              />
              <div
                className="password-toggle-button"
                onClick={handleTogglePassword}
              >
                {isPasswordVisible ? (
                  <img src={eye_open} alt="Eye Open" id="eye" />
                ) : (
                  <img src={eye_closed} alt="Eye Close" id="eye" />
                )}
              </div>
            </div>
            <div className="error-message">{error && <p>{error}</p>}</div>
          </form>
          <div className="buttons-container">
            <Button buttonTextHolder={"Login"} buttonOnClick={handleLogin} />
            <div className="socials-container">
              <p id="text-using-socials">or login with:</p>
              <div className="socials-logos">
                <img src={facebook} alt="facebook" />
                <img src={google} alt="google" />
                <img src={apple} alt="apple" />
              </div>
            </div>
          </div>
        </div>
      </wrapper-screen>
    </default-screen>
  );
}
