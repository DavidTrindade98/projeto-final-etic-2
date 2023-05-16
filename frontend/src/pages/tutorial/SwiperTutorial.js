
import "../../styles/tutorial/swiper_tutorial.css";
import TopContainer from "../../components/TopContainer";

function SwiperTutorial() {
  return (
    <div className="swiper-container-tutorial">
          <TopContainer backButtonFill={"white"} logoSmallFill={"white"} />
          <div className="swiper-wrapper-tutorial">
            <div className="swiper-slide-tutorial">Slide 1</div>
            <div className="swiper-slide-tutorial">Slide 2</div>
            <div className="swiper-slide-tutorial">Slide 3</div>
            <div className="swiper-slide-tutorial">Slide 4</div>
          </div>
    </div>
  );
}

export default SwiperTutorial;
