import "../../src/styles/App.css";
import LogoSmallSVG from "./LogoSmallSVG";
import "../../src/styles/components/logo_small.css";
import "../styles/components/top_container.css";
import BackButtonSVG from "./BackButtonSVG";

export default function TopContainer({
  logoStyle,
  backStyle,
  backClick,
  topContainerStyle,
  logoClick,
  backButtonFill,
  logoSmallFill
}) {
  return (
    <div className="top-container" style={topContainerStyle}>
      <BackButtonSVG fill={backButtonFill} backButtonStyle={backStyle} backButtonClick={backClick} />
      <LogoSmallSVG fill={logoSmallFill} logoSmallStyle={logoStyle} logoSmallClick={logoClick} />
    </div>
  );
}
