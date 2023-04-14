import TutorialOne from "../pages/tutorial/Tutorial_1";
import { Pagination } from "swiper";
import "../styles/tutorial/tutorial_swiper.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function TutorialSwiper() {

  return (
    <div className="tutorial_swiper">
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        grabCursor={true}
        effect="Coverflow"
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          {TutorialOne}
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
      <p id="skip_the_tutorial">Skip the tutorial</p>
    </div>
  );
}
