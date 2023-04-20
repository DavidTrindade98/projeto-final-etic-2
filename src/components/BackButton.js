import back from "../../src/assets/back.svg"
import "../../src/styles/App.css";
import "../../src/styles/components/logo_small.css";

export default function BackButton(){
    return(
        <img src={back} id="back_button" alt="logo" onClick={backClick} />
    );
}