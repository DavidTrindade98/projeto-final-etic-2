import "../../styles/chat/chat.css";
import TopContainer from "../../components/TopContainer";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import { useNavigate } from "react-router-dom";
import avatar_template from "../../assets/avatar_template.svg";

export default function ChatPage() {
  // State variable and function to navigate to different routes
  const navigate = useNavigate();

  // State variable and function to toggle menu
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  // State variable and function to track the active text
  const [activeText, setActiveText] = useState("traveller");

  // Function to handle text click and update the active text
  const handleTextClick = (text) => {
    setActiveText(text);
  };

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
          <span
            className={activeText === "traveller" ? "active" : ""}
            onClick={() => handleTextClick("traveller")}
          >
            As Traveller
          </span>
          <span
            className={activeText === "local" ? "active" : ""}
            onClick={() => handleTextClick("local")}
          >
            As Local
          </span>
        </div>
        <div className="chat-page-line"></div>
        <div>
          {activeText === "traveller" ? (
            <div>
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
                      <p>
                        Hi! Do you know any good Mexican res A expressão Lorem
                        ipsum em design gráfico e editoração é um texto padrão
                        em latim utilizado na produção gráfica para preencher os
                        espaços de texto em publicações para testar e ajustar
                        aspectos visuais antes de utilizar conteúdo real.{"..."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
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
                      <p id="Dan">Maggie</p>
                      <p>|</p>
                      <p>11m</p>
                    </div>
                    <div className="chat-messages-user-preview">
                      <p>
                        Hi! Hey, are there any discounts for stu visuais antes
                        de utilizar conteúdo real.{"..."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </wrapper-chat>
    </wrapper-screen>
  );
}
