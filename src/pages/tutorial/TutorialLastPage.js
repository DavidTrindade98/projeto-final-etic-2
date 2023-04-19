import Button from "../../components/Button";
import "../../../src/styles/tutorial/tutorial_last_page.css";
import LogoSmall from "../../components/LogoSmall.js";

import "swiper/css/pagination";
import "swiper/css/bundle";

export default function TutorialLastPage() {
  return (
    <div className="tutorial_last_page">
      <div class="swiper-button-prev"></div>
        <LogoSmall id=""/>
      <p id="done_text">Done!</p>
      <p id="let_us_ask">Let us ask five<br></br>quick questions<br></br>before we start.</p>
      <p id="you_can_edit">You can edit your anwsers later.</p>
      <Button buttonTextHolder="Ok"/>
    </div>
  );
}
