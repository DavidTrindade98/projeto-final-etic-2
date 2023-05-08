import "../../styles/chat/results_page.css";
import "../../styles/chat/locals_search.css";
import "../../styles/chat/filter_overlay.css";
import TopContainer from "../../components/TopContainer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import filter from "../../assets/filter.svg";
import SearchBar from "../../components/SearchBar";
import star from "../../assets/star.svg";
import avatar_template from "../../assets/avatar_template.svg";
import ArtSVG from "../../components/svgs/ArtSVG";
import FoodSVG from "../../components/svgs/FoodSVG";
import MusicSVG from "../../components/svgs/MusicSVG";

export default function ResultsPage() {
  const navigate = useNavigate();

  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const toggleFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <default-screen>
      <wrapper-screen>
        <TopContainer
          backButtonFill={"white"}
          backClick={() => navigate("/LocalsSearch")}
          logoSmallFill={"white"}
          logoClick={toggleMenu}
        />
        <div className={`menu-overlay ${isOpenMenu ? "open" : ""}`}>
          <div className="overlay-menu">
            <wrapper-screen>
              <TopContainer
                backButtonFill="#F0694F"
                logoStyle={{ display: "none" }}
                backClick={toggleMenu}
              />
              <MenuOverlay />
            </wrapper-screen>
          </div>
        </div>
        <div className="chat-title-container">
          <h1>Results:</h1>
        </div>
        <SearchBar searchBarText="Faro" />
        <div className="chat-filters-search-container">
          <div className="filters-text-container" onClick={toggleFilter}>
            <img src={filter} alt="filter" id="filter_icon"></img>
            <p>Filters</p>
          </div>
          <div className="search-text-container">
            <p>Search {">"}</p>
          </div>
        </div>
        <div className="results-container">
          <div className="result-top-container">
            <p id="Dan">Dan</p>
            <div className="result-star-rating">
              <img src={star} alt="star"></img>
              <p>4.9</p>
            </div>
          </div>
          <img src={avatar_template} alt="avatar"></img>
          <div className="result-end-container">
            <div className="result-preferences-container">
              <div className="result-preferences-container-gap">
                <div className="result-preferences-choice">
                  <ArtSVG artFill={"#F0694F"} />
                  <p>art</p>
                </div>
                <div className="result-preferences-choice">
                  <FoodSVG foodFill={"#F0694F"} />
                  <p>food</p>
                </div>
                <div className="result-preferences-choice">
                  <MusicSVG musicFill={"#F0694F"} />
                  <p>music</p>
                </div>
              </div>
              </div>
            <div className="ask-for-advice">
                <p>Ask for advice {">"}</p>
            </div>
          </div>
        </div>
      </wrapper-screen>
    </default-screen>
  );
}
