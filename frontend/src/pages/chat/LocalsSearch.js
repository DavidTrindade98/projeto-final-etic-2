import "../../styles/chat/locals_search.css";
import TopContainer from "../../components/TopContainer";
import SearchBar from "../../components/SearchBar";
import filter from "../../assets/filter.svg";
import magnifying_glass from "../../assets/magnifying_glass.svg";

export default function LocalsSearch() {
    return (
        <default-screen>
            <wrapper-screen>
                <TopContainer backStyle={{ visibility: "hidden" }} />
                <div className="locals-search-container">
                    <div className="chat-title-container">
                        <h1>Find the Local!</h1>
                    </div>
                    <SearchBar searchBarText="Choose a city..." />
                    <div className="chat-filters-search-container">
                        <div className="filters-text-container">
                            <img src={filter} alt="filter" id="filter_icon"></img>
                            <p>Filters</p>
                        </div>
                        <div className="search-text-container">
                            <p>Search {">"}</p>
                        </div>
                    </div>
                    <div className="big-glass-container">
                        <img src={magnifying_glass} alt="glass" id="big_magnifying_glass"></img>
                        <div className="big-glass-container-text">
                            <p>Choose a city <br></br> to search for the Locals!</p>
                        </div>
                    </div>
                </div>
            </wrapper-screen>
        </default-screen>
    );
}