import "../../src/styles/App.css";
import LogoSmall from "./LogoSmall";
import "../../src/styles/components/logo_small.css";
import BackButton from "./BackButton";
import "../styles/components/top_container.css";

export default function TopContainer({ logoStyle, backStyle,topContainerStyle }) {
  return (
    <div className="top-container" style={topContainerStyle}>
      <BackButton backButtonStyle={backStyle}/>
      <LogoSmall logoSmallStyle={logoStyle} />
    </div>
  );
}
