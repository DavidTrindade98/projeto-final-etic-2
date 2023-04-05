import { useState, useRef } from "react";
import "../../styles/welcome/SignupORlogin.css";
import "../../styles/App.css";
import logo from "../../assets/logo.svg";

export default function SignupORloginPage() {

  const [show, setShow] = useState(true);
  const ref = useRef(null);

  return (
    <default-screen>
      <div className="SignupORloginPage">
        <img src={logo} id="logo-signup" alt="logo" />
        <div className="text-signup-page">
          <text id="hey-have-we-met" ref={ref}>
            Hey,<br></br>have we met?
          </text>
          <text id="signup-to-start">
            Sign up to start or login to your account.
          </text>
          <button
            className="signup-button-overlay"
            onClick={() => {
              setShow(!show);
            }}
          >
            <text id="signup-text">Sign up</text>
          </button>
          <text id="login-text-button">Log in</text>
        </div>
        {!show && <p ref={ref} id="hey-have-we-met">Sign up<br></br> with e-mail</p>}
      </div>
    </default-screen>
    
  );
}
