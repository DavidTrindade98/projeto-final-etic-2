import "../../styles/chat/person_details.css";
import TopContainer from "../../components/TopContainer";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import { useNavigate } from "react-router-dom";


export default function PersonDetails() {

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
                backClick={() => navigate("/Chat/Messages")}
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
        </wrapper-screen>
    );
}