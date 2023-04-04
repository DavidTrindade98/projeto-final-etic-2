import "../../styles/welcome/FirstPage.css";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export default function FirstPage() {
  const navigate = useNavigate();

  return (
    <button id="screen-button" onClick={() => navigate("/SignupOrLogin")}>
      <default-screen>
        <div className="first-page">
          <div className="logo-slogan">
            <img src={logo} id="logo" alt="logo" />
            <text>Live it like the Locals</text>
          </div>
          <div className="tap-anywhere">
            <text>
              Tap anywhere to<br></br>continue
            </text>
          </div>
        </div>
      </default-screen>
    </button>
  );
}
