import "../../styles/rewards/individual_reward.css";
import TopContainer from "../../components/TopContainer";
import { useState } from "react";
import MenuOverlay from "../chat/MenuOverlay";
import { useNavigate } from "react-router-dom";
import star from "../../assets/star.svg";
import vans from "../../assets/rewards_logos/vans_image.jpg";
import Button from "../../components/Button";

export default function IndividualReward() {
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
        <div className="individual-rewards-container">
          <div className="profile-title">
            <h1 id="profile_title">Rewards</h1>
          </div>
          <div className="individual-rewards-info">
            <div className="individual-rewards-info-container">
              <h2>-25%</h2>
              <div className="reward-stars">
                <p>30</p>
                <img src={star} alt="star"></img>
              </div>
            </div>
            <div className="reward-line"></div>
          </div>
          <div className="reward-logo">
            <img src={vans} alt="vans"></img>
          </div>
          <div className="reward-text">
            <p>
              25% discount to use on any purchase in any VANS authorised store,
              including online.
            </p>
          </div>
          <Button
            buttonStyle={{ marginTop: "5vh", marginBottom: "10vh" }}
            buttonTextHolder={
              <>
                <div className="button-text">
                  <p>Get for</p>
                  <div className="button-rewards">
                    <p>30</p>
                    <img src={star} alt="star" />
                  </div>
                </div>
              </>
            }
            buttonTextStyle={{
              color: "#F0694F",
              fontSize: "12px",
              fontWeight: "400",
            }}
            buttonStyle2={{ border: "2px solid #F0694F" }}
            buttonOnClick={() => navigate("/RewardSuccess")}
          />
        </div>
      </wrapper-chat>
    </wrapper-screen>
  );
}
