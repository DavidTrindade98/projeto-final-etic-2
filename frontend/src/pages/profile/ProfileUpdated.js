import "../../styles/profile/profile_updated.css";
import TopContainer from "../../components/TopContainer";
import { useState,useRef } from "react";
import MenuOverlay from "../chat/MenuOverlay";
import { useNavigate } from "react-router-dom";
import avatar_template from "../../assets/avatar_template.svg";
import Button from "../../components/Button";

export default function ProfileUpdated() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const navigate = useNavigate();

  const [photo, setPhoto] = useState(null);

  const fileInputRef = useRef(null);

  const handlePhotoChange = (e) => {
    const newPhoto = URL.createObjectURL(e.target.files[0]);
    setPhoto(newPhoto);
  };

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
          <div className="profile-updated-text">
            <h2>Yay! <br></br> Your profile was <br></br> successfully<br></br>updated!</h2>
          </div>
          <Button
              buttonStyle={{ marginTop: "5vh", marginBottom: "10vh" }}
              buttonTextHolder={"Ok"}
              buttonTextStyle={{
                color: "#F0694F",
                fontSize: "12px",
                fontWeight: "400",
              }}
              buttonStyle2={{ border: "2px solid #F0694F" }}
              buttonOnClick={() => navigate("/MyProfile")}
            />
        </div>
      </wrapper-chat>
    </wrapper-screen>
  );
}