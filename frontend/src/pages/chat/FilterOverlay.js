import "../../styles/chat/filter_overlay.css";
import filter from "../../assets/filter.svg";
import "../../styles/chat/locals_search.css";

export default function FilterMenu() {
  return (
    <wrapper-screen>
      <div className="filter-container">
        <div className="filters-text-container">
          <img src={filter} alt="filter" id="filter_icon"></img>
          <h1>Filters</h1>
        </div>
        <div className="filters-gender-container">
          <h2>Gender</h2>
          <div className="filters-gender-container-2">
            <p>Male</p>
            <p>Female</p>
          </div>
        </div>
      </div>
    </wrapper-screen>
  );
}
