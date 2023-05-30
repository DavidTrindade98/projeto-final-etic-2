import { useState } from "react";
import "../../styles/welcome/signup.css";
import logo from "../../assets/logo.svg";
import facebook from "../../assets/facebook.svg";
import google from "../../assets/google.svg";
import apple from "../../assets/apple.svg";
import { useNavigate } from "react-router-dom";
import TopContainer from "../../components/TopContainer";
import eye_open from "../../assets/eye_open.svg";
import eye_closed from "../../assets/eye_closed.svg";
import Button from "../../components/Button";

export default function Signup() {
  const navigate = useNavigate();

  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setPasswordVisible((prevState) => !prevState);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    // Expression to validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    fetch("http://localhost:8000/request/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => {
        if (response.ok) {
          // Signup successful, navigate to another page
          navigate("/Login");
        } else {
          // Signup failed, display error message
          const errorResponse = response.json();
          if (errorResponse.name) {
            setError("Name failed");
          } else if (errorResponse.email) {
            setError("Email failed");
          } else if (errorResponse.password) {
            setError("Password wrong");
          } else {
            setError("Registration failed");
          }
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <default-screen>
      <wrapper-screen>
        <TopContainer
          backButtonFill="white"
          backClick={() => navigate("/LoginORSignup")}
        />
        <div className="logo-container">
          <img src={logo} id="logo" alt="logo" />
        </div>
        <div className="signup">
          <div className="welcome-text-container">
            <h1>
              Sign up<br></br>with e-mail
            </h1>
          </div>
          <form className="form-container" onSubmit={handleSignup}>
            <input
              type="name"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              id="email"
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
            <Button
              buttonTextHolder={"Sign up"}
              buttonType={"submit"}
              buttonOnClick={handleSignup}
            />
            <div className="socials-signup-show">
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
