import "../../styles/rewards/get_rewards.css";
import TopContainer from "../../components/TopContainer";
import { useState } from "react";
import MenuOverlay from "../chat/MenuOverlay";
import { useNavigate } from "react-router-dom";
import star from "../../assets/star.svg";
import vans from "../../assets/rewards_logos/vans_image.jpg";

export default function GetRewards() {
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
        <div className="get-rewards-container">
          <div className="profile-title">
            <h1 id="profile_title">Rewards</h1>
          </div>
          <div className="rewards-total-stars-container">
            <h2>174</h2>
            <img src={star} alt="star"></img>
          </div>
          <div className="rewards-containers">
            <div className="reward-container" onClick={() => navigate("/IndividualReward")}>
              <div className="reward-star-container-pos">
                <div className="reward-star-container">
                  <h2>30</h2>
                  <img src={star} alt="star"></img>
                </div>
              </div>
              <wrapper-chat>
                <div className="rewards-align-center">
                  <div className="reward-name">
                    <h2>VANS</h2>
                  </div>
                  <div className="reward-info">
                    <h1>-25 %</h1>
                  </div>
                  <div className="reward-logo">
                    <img src={vans} alt="vans"></img>
                  </div>
                  <div className="reward-more">
                    <p>More {">"}</p>
                  </div>
                </div>
              </wrapper-chat>
            </div>
            <div className="reward-container">
              <div className="reward-star-container-pos">
                <div className="reward-star-container">
                  <h2>30</h2>
                  <img src={star} alt="star"></img>
                </div>
              </div>
              <wrapper-chat>
                <div className="rewards-align-center">
                  <div className="reward-name">
                    <h2>VANS</h2>
                  </div>
                  <div className="reward-info">
                    <h1>-25 %</h1>
                  </div>
                  <div className="reward-logo">
                    <img src={vans} alt="vans"></img>
                  </div>
                  <div className="reward-more">
                    <p>More {">"}</p>
                  </div>
                </div>
              </wrapper-chat>
            </div>
          </div>
        </div>
      </wrapper-chat>
    </wrapper-screen>
  );
}
