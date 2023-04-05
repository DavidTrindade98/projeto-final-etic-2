import "../../styles/signup/SignupPage.css";
import logo from "../../assets/logo.svg";
import "../../styles/App.css";

export default function SignupPage() {
  return (
    <default-screen>
      <div className="SignupPage">
        <img src={logo} id="logo-signup-page" alt="logo" />
        <div className="sign-up-page-text">
          <text id="sign-up-with-email">
            Sign up<br></br>with e-mail
          </text>
          <text id="signup-to-start-or-login">
            Sign up to start or login to your account.
          </text>
        </div>
      </div>
    </default-screen>
  );
}
