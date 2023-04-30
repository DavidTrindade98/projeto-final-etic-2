import { useState } from "react";
import "../../styles/welcome/signup_or_login.css";
import "../../styles/welcome/login_page.css";
import "../../styles/App.css";
import logo from "../../assets/logo.svg";
import back from "../../assets/back.svg";
import facebook from "../../assets/facebook.svg";
import google from "../../assets/google.svg";
import apple from "../../assets/apple.svg";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton";
import TopContainer from "../../components/TopContainer";
import LogoSmall from "../../components/LogoSmall";
import Button from "../../components/Button";

export default function Login() {
  const navigate = useNavigate();

  return (
    <default-screen>
      <wrapper-screen>
        <TopContainer logoStyle={{ display: "none" }} />
        <div className="logo-container">
          <img src={logo} id="logo" alt="logo" />
        </div>
        <div className="login-page">
          <h1 id="login_text">Log in</h1>
          <form className="form-container">
            <input type="email" id="E-mail" placeholder="E-mail" />
            <br></br>
            <input type="password" id="Password" placeholder="Password" />
          </form>
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
      </wrapper-screen>
    </default-screen>
  );
}
