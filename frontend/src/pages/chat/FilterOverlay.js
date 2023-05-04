import "../../styles/chat/filter_overlay.css";
import filter from "../../assets/filter.svg";
import "../../styles/chat/locals_search.css";
import art from "../../assets/art.svg";
import food from "../../assets/food.svg";
import music from "../../assets/music.svg";
import VectorStar from "../../assets/VectorStar.svg";

export default function FilterMenu() {

  return (
    <wrapper-screen>
      <div className="filter-container">
        <div className="filters-text-container">
          <img src={filter} alt="filter" id="filter_icon"></img>
          <h1>Filters</h1>
        </div>
        <div className="gender-container">
          <h2>Gender</h2>
          <div className="gender-container-2">
            <p>Male</p>
            <p>Female</p>
          </div>
        </div>
        <div className="age-container">
          <h2>Age</h2>
          <div className="age-container-2">
            <input type="range" step="50" ></input>
            <div className="age-container-ranges">
              <p>{"<"}20</p>
              <p>40</p>
              <p>+60</p>
            </div>
          </div>
        </div>
        <div className="advices-in-container">
          <h2>Advices in</h2>
          <div className="advices-in-container-gap">
            <div className="filter-advice-choice">
              <img src={art} alt="art" ></img>
              <p>art</p>
            </div>
            <div className="filter-advice-choice">
              <img src={food} alt="food" ></img>
              <p>food</p>
            </div>
            <div className="filter-advice-choice">
              <img src={music} alt="music" ></img>
              <p>music</p>
            </div>
          </div>
        </div>
        <div className="filter-minimal-rating-container">
          <h2>Minimal Rating</h2>
          <div className="filter-stars-container">
              <img src={VectorStar} alt="star"></img>
              <img src={VectorStar} alt="star"></img>
              <img src={VectorStar} alt="star"></img>
              <img src={VectorStar} alt="star"></img>
              <img src={VectorStar} alt="star"></img>
          </div>
        </div>
      </div>
    </wrapper-screen>
  );
}
