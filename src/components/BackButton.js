import back from "../../src/assets/back.svg"
import "../../src/styles/App.css";
import "../../src/styles/components/back_button.css";

export default function BackButton({backClick}){
    return(
        <img src={back} id="back_button" alt="logo" onClick={backClick} />
    );
}