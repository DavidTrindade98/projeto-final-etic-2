import "../../styles/profile/my_profile.css";
import TopContainer from "../../components/TopContainer";
import { useState } from "react";
import MenuOverlay from "../chat/MenuOverlay";
import { useNavigate } from "react-router-dom";
import avatar_template from "../../assets/avatar_template.svg";
import star from "../../assets/star.svg";

export default function MyProfile() {
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
        <div className="myprofile-container">
          <div className="profile-title">
            <h1 id="profile_title">My Profile</h1>
          </div>
          <div className="profile-avatar">
            <img src={avatar_template} alt="avatar"></img>
          </div>
          <div className="myprofile-second-container">
            <h1>Jane</h1>
            <div className="filter-stars-container">
              <img src={star} alt="star"></img>
              <img src={star} alt="star"></img>
              <img src={star} alt="star"></img>
              <img src={star} alt="star"></img>
              <img src={star} alt="star"></img>
            </div>
            <div className="myprofile-total-stars">
              <p>174</p>
              <img src={star} alt="star"></img>
            </div>
          </div>
          <div className="myprofile-links-container">
            <p onClick={() => navigate("/Rewards")}>Get Rewards</p>
            <p onClick={() => navigate("/SavedRewards")}>Saved rewards</p>
            <p onClick={() => navigate("/EditProfile")}>Edit Profile</p>
            <p onClick={() => navigate("/Login")}>Log out</p>
          </div>
        </div>
      </wrapper-chat>
    </wrapper-screen>
  );
}
