import "../../styles/welcome/login.css";
import "../../styles/welcome/login_or_signup.css";
import TopContainer from "../../components/TopContainer";
import Button from "../../components/Button";
import logo from "../../assets/logo.svg";
import facebook from "../../assets/facebook.svg";
import google from "../../assets/google.svg";
import apple from "../../assets/apple.svg";
import { useNavigate } from "react-router-dom";
import { useState} from "react";
import eye_open from "../../assets/eye_open.svg";
import eye_closed from "../../assets/eye_closed.svg";

export default function Login() {
  const navigate = useNavigate();
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setPasswordVisible((prevState) => !prevState);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8000/request/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const accessToken = data.access_token;

        localStorage.setItem('accessToken', accessToken);
        console.log(accessToken)
        navigate("/TutorialSwiper/1");
        // Redirect or perform any other necessary actions
      } else {
        const errorResponse = await response.json();
        if (errorResponse.email) {
          setError("Email failed");
        } else if (errorResponse.password) {
          setError("Password wrong");
        } else {
          setError("Login failed");
        }
      }
    } catch (error) {
      // Handle network errors
    }
  };

  return (
    <default-screen>
      <wrapper-screen>
        <TopContainer
          logoStyle={{ display: "none" }}
          backButtonFill="white"
          backClick={() => navigate("/LoginORSignup")}
        />
        <div className="logo-container">
          <img src={logo} id="logo" alt="logo" />
        </div>
        <div className="login">
          <div className="welcome-text-container">
            <h1>Log in</h1>
          </div>
          <form className="form-container" onSubmit={handleLogin}>
            <input
              type="email"
              id="E-mail"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="password-input-container">
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
          {error && <div className="error-message"><p>{error}</p></div>}
          <div className="buttons-container">
            <Button buttonTextHolder={"Login"} buttonOnClick={handleLogin} />
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
