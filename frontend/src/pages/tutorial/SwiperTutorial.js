import "../../styles/tutorial/swiper_tutorial.css";
import TopContainer from "../../components/TopContainer";

export default function SwiperTutorial() {
  return (
    <default-screen>
      <wrapper-screen>
      <TopContainer />
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <h2>Slide 1</h2>
              <p> ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="swiper-slide">
              <h2>Slide 2</h2>
              <p>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
            <div class="swiper-slide">
              <h2>Slide 3</h2>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div class="swiper-slide">
              <h2>Slide 4</h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
          <div class="swiper-dots">
            <span class="swiper-dot active" onclick="handleDotClick(0)"></span>
            <span class="swiper-dot" onclick="handleDotClick(1)"></span>
            <span class="swiper-dot" onclick="handleDotClick(2)"></span>
            <span class="swiper-dot" onclick="handleDotClick(3)"></span>
          </div>
        </div>
      </wrapper-screen>
    </default-screen>
  );
}
