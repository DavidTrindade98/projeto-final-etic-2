import "../../styles/chat/menu_overlay.css";
import "../../styles/chat/locals_search.css";
import { useNavigate } from "react-router-dom";

export default function MenuOverlay({closeMenu}) {

  const navigate = useNavigate();

  return (
    <wrapper-screen>
      <div className="menu-container">
        <div className="locals-search-container">
          <div className="chat-title-container">
            <h1 style={{ color: "#F0694F" }}>Menu</h1>
          </div>
        </div>
        <div className="menu-links-container">
          <p onClick={() => {navigate("/LocalsSearch"); closeMenu();}}>Home</p>
          <p onClick={() => navigate("/Chat")}>Chat</p> 
          <p onClick={() => navigate("/MyProfile")}>My profile</p>
          <p onClick={() => navigate("/FAQ")}>FAQ</p>
        </div>
      </div>
    </wrapper-screen>
  );
}

