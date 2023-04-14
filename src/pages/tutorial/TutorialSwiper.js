import "../../styles/tutorial/tutorial_swiper.css";
import LogoSmall from "../../components/LogoSmall.js";
import People from "../../assets/people.svg";

export default function TutorialSwiper() {
  return (
    <default-screen>
        <LogoSmall />
        <div className="tutorialOne">
        <p id="hi_tutorial_text">
          Hi, Jane!<br></br>Here's a short<br></br>tutorial for you:
        </p>
        <img src={People} id="people_icon" alt="logo" />
        <div className="hi_tutorial_text_2_container">
          <p id="hi_tutorial_text_2">
          Dakee was created to give the real,<br></br> non-touristic experience in a
          visited city.<br></br><br></br> Based on your interests, we connect Travellers and
          Locals to exchange ideas<br></br> and give tips on what is actually worth<br></br> to do
          and see. No tourist cliché!
        </p>
        </div>
        
      </div>
    </default-screen>
  );
}
