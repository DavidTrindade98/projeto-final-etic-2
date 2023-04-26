import back from "../../src/assets/back.svg"
import "../../src/styles/App.css";
import "../../src/styles/components/back_button.css";
import { useNavigate } from "react-router-dom";

export default function BackButton(){

    const navigate = useNavigate();

    return(
        <img src={back} id="back_button" alt="icon" onClick={() => navigate(-1)} />
    );
}