import "../../styles/tutorial/tutorial_swiper.css";
import LogoSmall from "../../components/LogoSmall.js";
import People from "../../assets/people.svg";
import Plane from "../../assets/plane.svg";
import House from "../../assets/house.svg";
import Happy from "../../assets/happy.svg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import back from "../../assets/back.svg";
import Button from "../../components/Button";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function TutorialSwiper() {
  return (
    <div className="TutorialSwiper">
      <LogoSmall />
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={1}
        grabCursor={true}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
        <div className="swipper_back_button" src={back} alt="back"></div>
          <div className="tutorial">
            <p id="tutorial_text">
              Hi, Jane!<br></br>Heres a short<br></br>tutorial for you:
            </p>
            <img src={People} alt="icon" id="tutorial_middle_icon"></img>
            <p id="tutorial_text_2">
              Dakee was created to give the real,<br></br> non-touristic
              experience in a visited city.<br></br>
              <br></br> Based on your interests, we connect Travellers and
              Locals to exchange ideas<br></br> and give tips on what is
              actually worth<br></br> to do and see. No tourist cliché!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tutorial">
            <p id="tutorial_text">
              <br></br>Who is<br></br>a Traveller?
            </p>
            <img src={Plane} alt="icon" id="tutorial_middle_icon"></img>
            <p id="tutorial_text_2">
              A Traveller looks for a matching Local<br></br> personto get tips
              via chat on what to see,<br></br> visit or do in a specific city.
              <br></br>
              <br></br> He or she can later give the avaliations for the tips
              given.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tutorial">
            <p id="tutorial_text">
              <br></br>Who is<br></br>a Local?
            </p>
            <img src={House} alt="icon" id="tutorial_middle_icon"></img>
            <p id="tutorial_text_2">
              A Local is a person who lives in a city<br></br> and wants to give
              some tips to visitors.<br></br>
              <br></br> He or she recieves later avaliations from<br></br> the
              Travellers. Each avaliation has a point<br></br> value that can be
              exchanges for many<br></br> rewards and discounts from our
              Partners.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tutorial">
            <p id="tutorial_text">
              <br></br>
              <br></br>Be Both!
            </p>
            <img src={Happy} alt="icon" id="tutorial_middle_icon"></img>
            <p id="tutorial_text_2">
              A Local is a person who lives in a city<br></br> and wants to give
              some tips to visitors.<br></br>
              <br></br> He or she recieves later avaliations from<br></br> the
              Travellers. Each avaliation has a point<br></br> value that can be
              exchanges for many<br></br> rewards and discounts from our
              Partners.
            </p>
            <Button buttonTextHolder="Done" />
          </div>
        </SwiperSlide>
      </Swiper>
      <p id="skip_the_tutorial_text">Skip the tutorial</p>
    </div>
  );
}
