import "../../styles/welcome/login_page.css";
import "../../styles/App.css";
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

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <default-screen>
      <wrapper-screen>
        <TopContainer
          logoStyle={{ display: "none" }}
          backButtonFill="white"
          backClick={() => navigate("/SignupOrLogin")}
        />
        <div className="logo-container">
          <img src={logo} id="logo" alt="logo" />
        </div>
        <div className="login-page">
          <h1 id="title_text">Log in</h1>
          <form className="form-container">
            <input type="email" id="E-mail" placeholder="E-mail" />
            <div className="password-input-container">
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="Password"
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
          </form>
          <div className="buttons-container">
            <Button buttonTextHolder={"Login"} />
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
