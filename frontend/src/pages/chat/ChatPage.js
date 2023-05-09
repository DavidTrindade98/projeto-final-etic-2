import "../../styles/chat/chat.css";
import TopContainer from "../../components/TopContainer";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import { useNavigate } from "react-router-dom";
import avatar_template from "../../assets/avatar_template.svg";

export default function ChatPage() {
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
        backClick={() => navigate("/LocalsSearch")}
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
        <div className="chat-title-container">
          <h1 style={{ color: "#F0694F" }}>Chat</h1>
        </div>
        <div className="chat-page-second-container">
          <p>As Traveller</p>
          <p>As Local</p>
        </div>
        <div className="chat-page-line"></div>
        <div className="chat-all-messages-user-container">
          <div
            className="chat-messages-user-container"
            onClick={() => navigate("/Chat/Messages")}
          >
            <div className="chat-messages-avatar-container">
              <img src={avatar_template} alt="avatar"></img>
            </div>
            <div className="chat-message-text-container">
              <div className="chat-message-user-name">
                <p id="Dan">Dan</p>
                <p>|</p>
                <p>2m</p>
              </div>
              <div className="chat-messages-user-preview">
                <p>Hi! Do you know any good Mexican res{"..."}</p>
              </div>
            </div>
          </div>
        </div>
      </wrapper-chat>
    </wrapper-screen>
  );
}
