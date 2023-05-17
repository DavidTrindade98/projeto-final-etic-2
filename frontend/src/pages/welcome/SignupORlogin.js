import { useState } from "react";
import "../../styles/welcome/signup_or_login.css";
import "../../styles/welcome/login_page.css";
import "../../styles/components/back_button.css";
import "../../styles/components/button.css";
import "../../styles/App.css";
import logo from "../../assets/logo.svg";
import back from "../../assets/back.svg";
import facebook from "../../assets/facebook.svg";
import google from "../../assets/google.svg";
import apple from "../../assets/apple.svg";
import { useNavigate } from "react-router-dom";
import TopContainer from "../../components/TopContainer";
import { useEffect } from "react";
import eye_open from "../../assets/eye_open.svg";
import eye_closed from "../../assets/eye_closed.svg";

export default function SignupORloginPage() {
  const [isClicked, setIsClicked] = useState(true);
  const [clickCount, setClickCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBackButtonClicked, setIsBackButtonClicked] = useState(false);

  const handleBackClick = () => {
    if (!isSubmitting) {
      setIsClicked(true); // Hide the content on back click if not submitting
      setIsBackButtonClicked(true); // Set the flag for back button clicked
    }
  };

  const handleClick = () => {
    if (clickCount === 0) {
      setIsClicked(false); // Open the menu on the first click
    } else {
      setIsSubmitting(true); // Submit the form on subsequent clicks
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    setIsSubmitting(false);
    setClickCount((prevCount) => prevCount + 1); // Update the click count after form submission
  };

  useEffect(() => {
    if (isBackButtonClicked) {
      setClickCount(0); // Reset the click count when the back button is clicked
      setIsBackButtonClicked(false); // Reset the back button clicked flag
    }
  }, [isBackButtonClicked]);

  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <default-screen>
      <wrapper-screen>
        <TopContainer
          topContainerStyle={{ visibility: "hidden" }}
          backButtonFill="white"
        />
        <img
          src={back}
          id={isClicked ? "logo-back-hide" : "logo-back-show"}
          alt="logo-back"
          onClick={() => handleBackClick()}
        />
        <div className="logo-container">
          <img src={logo} id="logo" alt="logo" />
        </div>
        <div className="signup-or-login-page">
          <div className="text-container">
            <text id={isClicked ? "title_text" : "hey-have-we-met-hide"}>
              Hey,<br></br>have we met?
            </text>
            <text id={!isClicked ? "title_text" : "hey-have-we-met-hide"}>
              Sign up<br></br>with e-mail
            </text>
            <p
              id={isClicked ? "signup-to-start" : "signup-to-start-no-display"}
            >
              Sign up to start or login to your account.
            </p>
          </div>

          <form
            className={isClicked ? "form-container-hide" : "form-container"}
            onSubmit={handleSubmit}
          >
            <input type="name" id="Name" placeholder="Name" />
            <input type="email" id="E-mail" placeholder="E-mail" />
            <div className="password-input-container">
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="Password"
                placeholder="Password"
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

          <div className="buttons-container">
            <button
              className={
                isClicked ? "signup-button-show" : "signup-button-hide"
              }
              onClick={handleClick}
              disabled={isSubmitting}
            >
              <text id="signup_text">Sign up</text>
            </button>
            <text
              id={
                isClicked ? "login-text-button" : "login-text-button-no-display"
              }
              onClick={() => navigate("/Login")}
            >
              Log in
            </text>

            <div
              className={
                isClicked ? "socials-logos-hide" : "socials-signup-show"
              }
            >
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
