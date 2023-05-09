import TopContainer from "../../components/TopContainer";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import { useNavigate } from "react-router-dom";

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
        <div className="chat-title-container">
          <h1 style={{ color: "#F0694F" }}>Dan</h1>
        </div>
      </wrapper-chat>
    </wrapper-screen>
  );
}
