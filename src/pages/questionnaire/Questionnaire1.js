import "../../styles/questionnaire/questionnaire1.css";
import LogoSmall2 from "../../components/LogoSmall2";
import QuestionnaireSquare from "../../components/QuestionnaireSquare";
import Plane from "../../assets/plane.svg";
import House from "../../assets/house.svg";
import NextButton from "../../components/NextButton";
import BackButtonQuestionnaire1 from "../../components/BackButtonQuestionnaire1";
import { useNavigate } from "react-router-dom";

export default function Questionnaire1() {
  const navigate = useNavigate();

  return (
    <div className="questionnaire_container">
      <div className="questionnaire_top_container">
        <BackButtonQuestionnaire1 />
        <LogoSmall2 />
      </div>
      <div className="questionnaire_middle_container">
        <div className="questionnaire_middle_container_text_container">
          <p id="questionnaire_index_text">1/5</p>
          <p id="questionnaire_question">I am a:</p>
        </div>
        <div className="questionnaire_options_container">
          <div className="questionnaire_option">
            <QuestionnaireSquare
              questionnaireBoxImage={Plane}
              questionnaireBoxText={"Traveller"}
            />
          </div>
          <div className="questionnaire_option">
            <QuestionnaireSquare
              questionnaireBoxImage={House}
              questionnaireBoxText={"Local"}
            />
          </div>
        </div>
        <NextButton
          NextOnClick={() => {
            navigate("/Questionnaire2/");
          }}
        />
      </div>
    </div>
  );
}
