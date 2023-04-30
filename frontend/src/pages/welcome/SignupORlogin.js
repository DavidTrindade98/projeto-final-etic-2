import { useState } from "react";
import "../../styles/welcome/signup_or_login.css";
import "../../styles/App.css";
import logo from "../../assets/logo.svg";
import back from "../../assets/back.svg";
import facebook from "../../assets/facebook.svg";
import google from "../../assets/google.svg";
import apple from "../../assets/apple.svg"
import { useNavigate } from "react-router-dom";


export default function SignupORloginPage() {
  const [isClicked, notClicked] = useState(true);

  function Clicked() {
    notClicked(!isClicked);
  }

  const navigate = useNavigate();

  return (
    <default-screen>

      <div className="SignupORloginPage">
        <img
          src={back}
          id={isClicked ? "logo-back-hide" : "logo-back-show"}
          alt="logo-back"
          onClick={Clicked}
        />
        <img src={logo} id="logo-signup" alt="logo" />
        <div className="text-signup-page">
          <text id={isClicked ? "hey-have-we-met" : "hey-have-we-met-hide"}>
            Hey,<br></br>have we met?
          </text>
          <text id={!isClicked ? "signup-with-email" : "hey-have-we-met-hide"}>
            Sign up<br></br>with e-mail
          </text>
          <text
            id={isClicked ? "signup-to-start" : "signup-to-start-no-display"}
          >
            Sign up to start or login to your account.
          </text>
          <form className={isClicked ? "signup-form-hide" : "signup-form"}>
            <input type="name" id="Name" placeholder="Name" /><br></br>
            <input type="email" id="E-mail" placeholder="E-mail"/><br></br>
            <input type="password" id="Password"  placeholder="Password"/>
          </form>
          <button
            className={
              isClicked ? "signup-button-overlay" : "signup-button-overlay-2"
            }
            onClick={() => {
              Clicked();
              notClicked();
            }} 

          >
            <text id="signup-text">Sign up</text>
          </button>
          <text
            id={
              isClicked ? "login-text-button" : "login-text-button-no-display"
            }
            onClick={() => navigate("/Login")}
          >
            Log in
          </text>
          <div className= {isClicked ? "socials-signup-hide" : "socials-signup-container"} >
            <text id="signup-using-socials">or sign up using:</text><br></br>
            <div className="socials-logos">
            <img src={facebook} alt="facebook" />
            <img src={google} alt="google" />
            <img src={apple} alt="apple" />
            </div>
          </div>
        </div>
      </div>

    </default-screen>
  );
}
