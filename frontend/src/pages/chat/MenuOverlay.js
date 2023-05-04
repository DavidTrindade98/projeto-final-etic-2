import "../../styles/chat/menu_overlay.css";
import "../../styles/chat/locals_search.css";


export default function MenuOverlay({toggleMenu}) {
  return (
    <wrapper-screen>
      <div className="menu-container">
        <div className="locals-search-container">
          <div className="chat-title-container">
            <h1 style={{ color: "#F0694F" }}>Menu</h1>
          </div>
        </div>
        <div className="menu-links-container">
          <p onClick={() => toggleMenu()}>Home</p>
          <p>Chat</p>
          <p>My profile</p>
          <p>FAQ</p>
        </div>
      </div>
    </wrapper-screen>
  );
}
