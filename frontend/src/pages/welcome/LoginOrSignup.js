import "../../styles/welcome/login_or_signup.css";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import TopContainer from "../../components/TopContainer";
import Button from "../../components/Button";

export default function LoginOrSignup() {
  const navigate = useNavigate();

  return (
    <default-screen>
      <wrapper-screen>
        <TopContainer
          topContainerStyle={{ visibility: "hidden" }}
          backButtonFill="white"
        />
        <div className="logo-container">
          <img src={logo} id="logo" alt="logo" />
        </div>
        <div className="login-or-signup">
          <div className="welcome-text-container">
            <h1>
              Hey,<br></br>have we met?
            </h1>
            <p>
              Sign up to start or login to your account.
            </p>
          </div>
          <div className="buttons-container">
            <Button
              buttonTextHolder={"Sign up"}
              buttonOnClick={() => navigate("/Signup")}
            />
            <h2 onClick={() => navigate("/Login")}>
              Log in
            </h2>
          </div>
        </div>
      </wrapper-screen>
    </default-screen>
  );
}
