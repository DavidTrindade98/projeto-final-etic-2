import "../../styles/chat/person_details.css";
import TopContainer from "../../components/TopContainer";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import { useNavigate } from "react-router-dom";
import avatar_template from "../../assets/avatar_template.svg";
import location from "../../assets/location.svg";
import star from "../../assets/star.svg";
import ArtSVG from "../../components/svgs/ArtSVG";
import FoodSVG from "../../components/svgs/FoodSVG";
import MusicSVG from "../../components/svgs/MusicSVG";

export default function PersonDetails() {
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
        backClick={() => navigate("/Chat/Messages")}
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
        <div className="person-details-page">
          <div className="person-details-avatar-container">
            <img src={avatar_template} alt="avatar"></img>
          </div>
          <div className="person-details-first-container">
            <h1>Dan</h1>
            <div className="person-details-logo-location">
              <img src={location} alt="location"></img>
              <p id="person_location">Faro</p>
            </div>
            <div className="filter-stars-container">
              <img src={star} alt="star"></img>
              <img src={star} alt="star"></img>
              <img src={star} alt="star"></img>
              <img src={star} alt="star"></img>
              <img src={star} alt="star"></img>
              <p id="profile-star-rating">4.9</p>
            </div>
          </div>
          <div className="person-details-about-container">
            <h2>About</h2>
            <div className="person-details-about-text">
              <p>
                Hey there, I'm Dan , a Faro local who's all about discovering
                the city's hidden gems. I'm a huge fan of indie music concerts
                and modern art galleries, and I love exploring small,
                underground restaurants that only the locals know about. Think
                of me as your personal tour guide to Faro's coolest spots. Let's
                explore Faro together!
              </p>
            </div>
          </div>
          <div className="person-details-advices-container">
            <h2>Give advices for:</h2>
            <div className="advices-for-container">
              <p>Faro, Portugal</p>
              <p>Berlin, Germany</p>
            </div>
          </div>
          <div className="person-details-travel-experience-container">
            <h2>Travel experience preferences</h2>
            <div className="advices-in-container">
              <div className="advices-in-container-gap">
                <div className="filter-advice-choice">
                  <ArtSVG artFill={"#F0694F"} />
                  <p>art</p>
                </div>
                <div className="filter-advice-choice">
                  <FoodSVG foodFill={"#F0694F"} />
                  <p>food</p>
                </div>
                <div className="filter-advice-choice">
                  <MusicSVG musicFill={"#F0694F"} />
                  <p>music</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </wrapper-chat>
    </wrapper-screen>
  );
}
