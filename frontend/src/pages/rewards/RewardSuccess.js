import "../../styles/rewards/reward_success.css";
import TopContainer from "../../components/TopContainer";
import { useState } from "react";
import MenuOverlay from "../chat/MenuOverlay";
import { useNavigate } from "react-router-dom";
import qr_code from "../../assets/qr_code.svg";

export default function RewardSuccess() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const navigate = useNavigate();

  return (
    <wrapper-screen>
      <TopContainer
        logoSmallFill={"#F0694F"}
        backButtonFill={"#F0694F"}
        backClick={() => navigate(-1)}
        logoClick={toggleMenu}
      />
      <div className={`menu-overlay ${isOpenMenu ? "open" : ""}`}>
        <div className="overlay-menu">
          <wrapper-screen>
            <TopContainer
              backButtonFill="#F0694F"
              logoStyle={{ display: "none" }}
              backClick={toggleMenu}
            />
            <MenuOverlay closeMenu={toggleMenu} />
          </wrapper-screen>
        </div>
      </div>
      <wrapper-chat>
        <div className="profile-title">
          <h1 id="profile_title">Success!</h1>
        </div>
        <div className="reward-success-container">
          <div className="reward-sucess-info">
            <h1>VANS</h1>
            <h1>-25%</h1>
          </div>
          <img src={qr_code} alt="qrcode"></img>
          <p>or</p>
          <h1>DKQ45W</h1>
          <div className="qr-code-text"><p>
            Show the QR code at check-out or insert the promo code in online
            store.<br></br><br></br> You can always find your coupons in Saved rewards section on
            your profile.</p>
          </div>
        </div>
      </wrapper-chat>
    </wrapper-screen>
  );
}
