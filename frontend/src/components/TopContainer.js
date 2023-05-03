import "../../src/styles/App.css";
import LogoSmall from "./LogoSmall";
import "../../src/styles/components/logo_small.css";
import BackButton from "./BackButton";
import "../styles/components/top_container.css";

export default function TopContainer({
  logoStyle,
  backStyle,
  backClick,
  topContainerStyle,
}) {
  return (
    <div className="top-container" style={topContainerStyle}>
      <BackButton backButtonStyle={backStyle} backButtonClick={backClick} />
      <LogoSmall logoSmallStyle={logoStyle} />
    </div>
  );
}
