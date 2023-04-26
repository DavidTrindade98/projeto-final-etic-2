import "../../src/styles/App.css";
import "../../src/styles/components/button.css";

export default function Button({ buttonTextHolder, buttonOnClick,buttonStyle }) {
  return (
    <div className="button" style={buttonStyle}>
      <button id="button" onClick={buttonOnClick}>
        <p id="button-text">{buttonTextHolder}</p>
      </button>
    </div>
  );
}
