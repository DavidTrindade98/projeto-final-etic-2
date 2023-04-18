import "../../src/styles/App.css";
import "../../src/styles/components/button.css";

export default function Button({buttonTextHolder, buttonOnClick}) {
  return (
    <button id="button" onClick={buttonOnClick}>
        <p id="button-text">{buttonTextHolder}</p>
    </button>
  );
}
