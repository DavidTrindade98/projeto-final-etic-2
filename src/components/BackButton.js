import back from "../../src/assets/back.svg"
import "../../src/styles/App.css";
import "../../src/styles/components/back_button.css";

export default function BackButton({back_button_click}){

    return(
        <img src={back} id="back_button" alt="icon" onClick={back_button_click} />
    );
}