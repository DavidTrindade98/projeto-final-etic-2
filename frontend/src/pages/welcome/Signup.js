import { useState } from "react";
import "../../styles/welcome/signup.css";
import logo from "../../assets/logo.svg";
import facebook from "../../assets/facebook.svg";
import google from "../../assets/google.svg";
import apple from "../../assets/apple.svg";
import { useNavigate } from "react-router-dom";
import TopContainer from "../../components/TopContainer";
import eye_open from "../../assets/eye_open.svg";
import eye_closed from "../../assets/eye_closed.svg";
import Button from "../../components/Button";

export default function Signup() {
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
          backButtonFill="white"
          backClick={() => navigate("/LoginORSignup")}
        />
        <div className="logo-container">
          <img src={logo} id="logo" alt="logo" />
        </div>
        <div className="signup">
          <div className="welcome-text-container">
            <h1>Sign up<br></br>with e-mail</h1>
          </div>
          <form className="form-container" onSubmit={""}>
            <input type="name" id="Name" placeholder="Name" />
            <input type="email" id="email" placeholder="E-mail" />
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
          </form>

          <div className="buttons-container">
            <Button buttonTextHolder={"Sign up"} />
            <div className="socials-signup-show">
              <p id="text-using-socials">or sign up using:</p>
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
