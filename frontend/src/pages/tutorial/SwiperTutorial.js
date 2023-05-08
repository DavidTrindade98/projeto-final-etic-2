import "../../styles/tutorial/swiper_tutorial.css";
import TopContainer from "../../components/TopContainer";
import React from "react";

export default function SwiperTutorial() {
  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <TopContainer backButtonFill={"white"} logoSmallFill={"white"} />
        <div className="swiper-page">
          <h1>Page 1</h1>
        </div>
        <div className="swiper-page">
          <h1>Page 2</h1>
        </div>
        <div className="swiper-page">
          <h1>Page 3</h1>
        </div>
      </div>
      <div className="swiper-dots"></div>
    </div>
  );
}
