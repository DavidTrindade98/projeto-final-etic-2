import "../../src/styles/App.css";
import "../../src/styles/components/button.css";

export default function Button({ buttonTextHolder, buttonOnClick }) {
  return (
    <div className="button">
      <button id="button" onClick={buttonOnClick}>
        <p id="button-text">{buttonTextHolder}</p>
      </button>
    </div>
  );
}
