import "../../styles/profile/my_profile.css";
import TopContainer from "../../components/TopContainer";
import { useState, useRef } from "react";
import MenuOverlay from "../chat/MenuOverlay";
import { useNavigate } from "react-router-dom";
import avatar_template from "../../assets/avatar_template.svg";
import "../../styles/profile/edit_profile.css";
import Button from "../../components/Button";
import XVector from "../../assets/XVector.svg";
import ArtSVG from "../../components/svgs/ArtSVG";
import FoodSVG from "../../components/svgs/FoodSVG";

export default function EditProfile() {
  // State variables
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const navigate = useNavigate();

  const [photo, setPhoto] = useState(null);

  const fileInputRef = useRef(null);

  // Handle photo change
  const handlePhotoChange = (e) => {
    const newPhoto = URL.createObjectURL(e.target.files[0]);
    setPhoto(newPhoto);
  };

  // Handle click event on photo change button
  const handleClick = () => {
    fileInputRef.current.click();
  };

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
        <div className="edit-profile-container">
          <div className="profile-title">
            <h1 id="profile_title">Edit Profile</h1>
          </div>
          <div className="edit-profile-avatar">
            <img src={photo || avatar_template} alt="avatar"></img>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              style={{ display: "none" }}
            />
          </div>
          <div className="change-photo-container">
            <p onClick={handleClick}>Change Photo {">"}</p>
          </div>
          <div className="edit-profile-information-container">
            <div className="edit-name-container">
              <p>Name {"(this will be public on your Profile)"}</p>
              <input
                id="edit_name"
                type="text"
                placeholder="Change name"
              ></input>
              <div className="edit-profile-line"></div>
            </div>
            <div className="edit-current-city">
              <p>Current City</p>
              <input
                id="edit_city"
                type="text"
                placeholder="Change City"
              ></input>
              <div className="edit-profile-line"></div>
            </div>
            <div className="edit-cities-advice">
              <p>Cities that you can give advices about</p>
              <div className="edit-cities-gap-between">
                <div className="edit-cities">
                  <div className="edit-city-circle">
                    <img src={XVector} alt="XVector" id="xVector" />
                    <p>Chicago IL, USA</p>
                  </div>
                </div>
                <div className="edit-cities">
                  <div className="edit-city-circle">
                    <img src={XVector} alt="XVector" id="xVector" />
                    <p>Paris, France</p>
                  </div>
                </div>
              </div>
              <div className="edit-profile-line"></div>
            </div>
            <div className="edit-bio">
              <p>Bio</p>
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Hi there, I'm Jane, a Chicago native who's been bitten by the travel bug, especially when it comes to exploring Europe. From the charming streets of Paris to the historic landmarks in Rome, I love discovering new cultures, meeting locals, and trying new foods. Join me on my journey and let's discover the beauty of Europe together!"
                ></input>
              </div>
            </div>
            <div className="edit-profile-line"></div>
            <div className="edit-travel-experience">
              <p>Travel experience preferences</p>
              <div className="edit-cities-gap-between">
                <div className="edit-preference-circle">
                  <img src={XVector} alt="XVector" id="xVector" />
                  <ArtSVG artFill={"#F0694F"} />
                  <p>art</p>
                </div>
                <div className="edit-preference-circle">
                  <img src={XVector} alt="XVector" id="xVector" />
                  <FoodSVG foodFill={"#F0694F"} />
                  <p>food</p>
                </div>
              </div>
              <div className="edit-profile-line"></div>
            </div>
            <Button
              buttonStyle={{ marginTop: "5vh", marginBottom: "10vh" }}
              buttonTextHolder={"Save"}
              buttonTextStyle={{
                color: "#F0694F",
                fontSize: "12px",
                fontWeight: "400",
              }}
              buttonStyle2={{ border: "2px solid #F0694F" }}
              buttonOnClick={() => navigate("/ProfileUpdated")}
            />
          </div>
        </div>
      </wrapper-chat>
    </wrapper-screen>
  );
}
