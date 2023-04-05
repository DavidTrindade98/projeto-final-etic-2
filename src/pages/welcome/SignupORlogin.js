import "../../styles/welcome/SignupORlogin.css";
import "../../styles/App.css";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";



export default function SignupORloginPage() {
  
  const navigate = useNavigate();


  return (
    <default-screen>
      <div className="SignupORloginPage">
        <img src={logo} id="logo-signup" alt="logo" />
        <div className="text-signup-page">
          <text id="hey-have-we-met">
            Hey,<br></br>have we met?
          </text>
          <text id="signup-to-start">
            Sign up to start or login to your account.
          </text>
          <button
            className="signup-button-overlay"
            onClick={() => navigate("/Signup")}
          >
            <text id="signup-text">Sign up</text>
          </button>
          <text id="login-text-button">Log in</text>
        </div>
      </div>
    </default-screen>
  );
}