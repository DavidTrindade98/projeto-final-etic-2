import TopContainer from "../../components/TopContainer";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import { useNavigate } from "react-router-dom";
import avatar_template from "../../assets/avatar_template.svg";
import VectorStar from "../../assets/VectorStar.svg";
import "../../styles/chat/messages_page.css";

export default function MessagesPage() {
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
        backClick={() => navigate("/Chat")}
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
        <div className="messages-top-container">
          <div className="chat-messages-avatar-container">
            <img src={avatar_template} alt="avatar"></img>
          </div>
          <div className="chat-title-container">
            <h1 style={{ color: "#F0694F" }}>Dan</h1>
            <p id="user-location">Faro</p>
            <p id="profile-details" onClick={() => navigate("/Chat/PersonDetails")}>See details {">"}</p>
            <div className="messages-line"></div>
            <p id="rate">Rate:</p>
            <div className="filter-stars-container">
              <img src={VectorStar} alt="star"></img>
              <img src={VectorStar} alt="star"></img>
              <img src={VectorStar} alt="star"></img>
              <img src={VectorStar} alt="star"></img>
              <img src={VectorStar} alt="star"></img>
            </div>
          </div>
        </div>
        <div className="chat-messages-container"> 

        </div>
        <div className="input-message-bar">
          <input type="text" placeholder="Type something..."></input>
        </div>
        
      </wrapper-chat>
    </wrapper-screen>
  );
}
