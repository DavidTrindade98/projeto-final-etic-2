import "../../src/styles/App.css";
import "../../src/styles/components/button.css";

export default function Button({
  buttonTextHolder,
  buttonType,
  buttonOnClick,
  buttonStyle,
  buttonTextStyle,
  buttonStyle2,
}) {
  return (
    <div className="button" style={buttonStyle}>
      <button
        id="button"
        type={buttonType}
        style={buttonStyle2}
        onClick={buttonOnClick}
      >
        <p id="button-text" style={buttonTextStyle}>
          {buttonTextHolder}
        </p>
      </button>
    </div>
  );
}
