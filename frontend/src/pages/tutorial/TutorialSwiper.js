import "../../styles/tutorial/tutorial_swiper.css";
import People from "../../assets/people.svg";
import Plane from "../../assets/plane.svg";
import House from "../../assets/house.svg";
import Happy from "../../assets/happy.svg";
import Button from "../../components/Button";
import { refreshPage } from "../../helpers/RefreshPage";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import SwiperCore, { History } from "swiper/core";
import LogoSmall2 from "../../components/LogoSmall2";

import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([History]);

export default function TutorialSwiper() {
  const navigate = useNavigate();

  return (
    <div className="TutorialSwiper">
      <Swiper
        style={{
          "--swiper-navigation-size": "",
          "--swiper-navigation-color": "transparent",
          "--swiper-navigation-top-offset": "8vh",
        }}
        modules={[Navigation, Pagination, A11y, History]}
        spaceBetween={5}
        slidesPerView={1}
        grabCursor={true}
        history={{
          key: "/TutorialSwiper",
        }}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide data-history="1" key={1}>
          <p id="tutorial_text">
            Hi, Jane!<br></br>Heres a short<br></br>tutorial for you:
          </p>
          <img src={People} alt="icon" id="tutorial_middle_icon"></img>
          <p id="tutorial_text_2">
            Dakee was created to give the real,<br></br> non-touristic
            experience in a visited city.<br></br>
            <br></br> Based on your interests, we connect Travellers and Locals
            to exchange ideas<br></br> and give tips on what is actually worth
            <br></br> to do and see. No tourist cliché!
          </p>
          <div className="skip_the_tutorial">
            <p
              id="skip_the_tutorial_text"
              onClick={() => {
                navigate("/TutorialSwiper/5");
                refreshPage();
              }}
            >
              Skip the tutorial
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide data-history="2">
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
            <div className="skip_the_tutorial">
              <p
                id="skip_the_tutorial_text"
                onClick={() => {
                  navigate("/TutorialSwiper/5");
                  refreshPage();
                }}
              >
                Skip the tutorial
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide data-history="3">
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
            <div className="skip_the_tutorial">
              <p
                id="skip_the_tutorial_text"
                onClick={() => {
                  navigate("/TutorialSwiper/5");
                  refreshPage();
                }}
              >
                Skip the tutorial
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide data-history="4">
          <p id="tutorial_text">
            <br></br>
            <br></br>Be Both!
          </p>
          <img src={Happy} alt="icon" id="tutorial_middle_icon"></img>
          <p id="tutorial_text_2">
            As a Dakee user, you can choose to be both Traveller and Local.
            <br></br>
            <br></br>
            Gain discounts by giving advices to visitors and get the
            unforgettable local experience while travelling!
          </p>
          <Button buttonTextHolder="Done" buttonOnClick={<></>} />
        </SwiperSlide>
        <SwiperSlide data-history="5">
          <p id="tutorial_text">
            <br></br>
            Done!
          </p>
          <div id="tutorial_text">
            Let us ask five<br></br>quick questions<br></br>before we start.
            <p id="you_can_edit">You can edit your anwsers later.</p>
          </div>
          <Button
            buttonTextHolder="Ok"
            buttonOnClick={() => {
              navigate("/Questionnaire1/");
            }}
          />
        </SwiperSlide>
        <span slot="container-start">{<LogoSmall2 />}</span>
      </Swiper>
    </div>
  );
}
