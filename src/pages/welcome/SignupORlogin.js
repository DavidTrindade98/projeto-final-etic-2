import "../../styles/welcome/SignupORlogin.css";
import "../../styles/App.css";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import back from "../../assets/back.svg";

export default function SignupORloginPage() {
  const [isClicked, notClicked] = useState(true);

  function Clicked() {
    notClicked(!isClicked);
  }

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
          <text style={{display:"none"}} id={isClicked ? "hey-have-we-met-hide" : "signup-with-email"}  >
              Sign up<br></br>with e-mail
          </text>
          <text
            id={isClicked ? "signup-to-start" : "signup-to-start-no-display"}
          >
            Sign up to start or login to your account.
          </text>
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
          >
            Log in
          </text>
        </div>
      </div>
    </default-screen>
  );
}
