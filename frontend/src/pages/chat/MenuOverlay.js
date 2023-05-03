import "../../styles/chat/menu_overlay.css";
import "../../styles/chat/locals_search.css";
import TopContainer from "../../components/TopContainer";

export default function MenuOverlay() {
    return (
        <wrapper-screen>
            <div className="menu-container">
                <TopContainer backButtonFill="#F0694F" logoStyle={{ display: "none" }} />
                <div className="locals-search-container">
                    <div className="chat-title-container">
                        <h1 style={{color:"#F0694F"}}>Menu</h1>
                    </div>
                </div>
                <div className="menu-links-container">
                    <p>Home</p>
                    <p>Chat</p>
                    <p>My profile</p>
                    <p>FAQ</p>
                </div>
            </div>
        </wrapper-screen>
    );
}