import "../../styles/tutorial/tutorial_1.css"
import LogoSmall from "../../components/LogoSmall.js";



export default function TutorialOne(){
    return(
        <default-screen>
        <div className="tutorialOne">
            <LogoSmall />
            <p id="hi_tutorial_text">Hi, Jane!<br></br>Here's a short<br></br>tutorial for you:</p>
        </div>
        </default-screen>
    );
}