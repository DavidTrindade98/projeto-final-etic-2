import "../../src/styles/components/search_bar.css";
import magnifying_glass from "../../src/assets/magnifying_glass.svg";

export default function SearchBar({searchBarText}){
    return(
        <div className="search-bar-container">
            <img src={magnifying_glass} alt="glass" id="magnifying_glass"></img>
            <input type="text" placeholder={searchBarText}></input>
        </div>
    );
}