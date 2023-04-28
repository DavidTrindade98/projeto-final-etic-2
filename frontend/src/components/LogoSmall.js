import logo_small from "../../src/assets/logo_small.svg"
import "../../src/styles/App.css";
import "../../src/styles/components/logo_small.css";

export default function LogoSmall(){
    return(
        <img src={logo_small} id="logo_small" alt="logo" />
    );
}
