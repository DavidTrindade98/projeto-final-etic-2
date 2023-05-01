import { useState } from "react";
import "../../styles/welcome/signup_or_login.css";
import "../../styles/welcome/login_page.css";
import "../../styles/components/back_button.css";
import "../../styles/components/button.css";
import "../../styles/App.css";
import logo from "../../assets/logo.svg";
import back from "../../assets/back.svg";
import facebook from "../../assets/facebook.svg";
import google from "../../assets/google.svg";
import apple from "../../assets/apple.svg";
import { useNavigate } from "react-router-dom";
import TopContainer from "../../components/TopContainer";

export default function SignupORloginPage() {
  const [isClicked, notClicked] = useState(true);
  function Clicked() {
    notClicked(!isClicked);
  }

  const navigate = useNavigate();

  return (
    <default-screen>
      <wrapper-screen>
        <TopContainer topContainerStyle={{ visibility: "hidden" }} />
        <img
          src={back}
          id={isClicked ? "logo-back-hide" : "logo-back-show"}
          alt="logo-back"
          onClick={Clicked}
        />
        <div className="logo-container">
          <img src={logo} id="logo" alt="logo" />
        </div>
        <div className="signup-or-login-page">
          <div className="text-container">
            <text id={isClicked ? "title_text" : "hey-have-we-met-hide"}>
              Hey,<br></br>have we met?
            </text>
            <text id={!isClicked ? "title_text" : "hey-have-we-met-hide"}>
              Sign up<br></br>with e-mail
            </text>
            <p
              id={isClicked ? "signup-to-start" : "signup-to-start-no-display"}
            >
              Sign up to start or login to your account.
            </p>
          </div>

          <form
            className={
              isClicked ? "form-container-hide" : "form-container"
            }
          >
            <input type="name" id="Name" placeholder="Name" />
            <input type="email" id="E-mail" placeholder="E-mail" />
            <input type="password" id="Password" placeholder="Password" />
          </form>

          <div className="buttons-container">
            <button
              className={
                isClicked ? "signup-button-show" : "signup-button-hide"
              }
              onClick={() => {
                Clicked();
                notClicked();
              }}
            >
              <text id="signup_text">Sign up</text>
            </button>
            <text
              id={
                isClicked ? "login-text-button" : "login-text-button-no-display"
              }
              onClick={() => navigate("/Login")}
            >
              Log in
            </text>

            <div
              className={
                isClicked ? "socials-logos-hide" : "socials-signup-show"
              }
            >
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
