import back from "../../src/assets/back.svg"
import "../../src/styles/App.css";
import "../../src/styles/components/back_button_questionnaire1.css";
import { useNavigate } from "react-router-dom";

export default function BackButtonQuestionnaire1(){

    const navigate = useNavigate();

    return(
        <img src={back} id="back_button_questionnaire1" alt="icon" onClick={() => navigate("/TutorialSwiper/5")} />
    );
}