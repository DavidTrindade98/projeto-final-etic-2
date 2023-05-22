import "../../styles/welcome/first_page.css";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export default function FirstPage() {
  const navigate = useNavigate();

  return (
    <div className="first-page" onClick={() => navigate("/LoginOrSignup")}>
      <div className="logo-slogan">
        <img src={logo} id="logo" alt="logo" />
        <p>Live it like the Locals</p>
      </div>
      <div className="tap-anywhere">
        <p>
          Tap anywhere to<br></br>continue
        </p>
      </div>
    </div>
  );
}
