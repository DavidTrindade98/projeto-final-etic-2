import "../../styles/welcome/login_page.css";
import "../../styles/App.css";
import TopContainer from "../../components/TopContainer";
import Button from "../../components/Button";
import logo from "../../assets/logo.svg";
import facebook from "../../assets/facebook.svg";
import google from "../../assets/google.svg";
import apple from "../../assets/apple.svg";

export default function Login() {
  return (
    <default-screen>
      <wrapper-screen>
        <TopContainer logoStyle={{ display: "none" }} />
        <div className="logo-container">
          <img src={logo} id="logo" alt="logo" />
        </div>
        <div className="login-page">
          <h1 id="title_text">Log in</h1>
          <form className="form-container">
            <input type="email" id="E-mail" placeholder="E-mail" />
            <input type="password" id="Password" placeholder="Password" />
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
