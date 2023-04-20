import "../../styles/questionnaire/questionnaire.css";
import BackButton from "../../components/BackButton";
import LogoSmall2 from "../../components/LogoSmall2";
import QuestionnaireSquare from "../../components/QuestionnaireSquare";
import Plane from "../../assets/plane.svg";
import House from "../../assets/house.svg";

export default function Questionnaire1({ backCLick }) {
  return (
    <div className="questionnaire_one_container">
      <div className="questionaire_wrapper">
        <div className="questionnaire_one_top_container">
          <BackButton onClick={backCLick} />
          <LogoSmall2 />
        </div>
        <div className="questionnaire_one_middle_container">
          <div className="questionnaire_one_middle_container_text_container">
            <p id="questionnaire_one_index_text">1/5</p>
            <p id="questionnaire_one_question">I am a:</p>
          </div>
          <div className="questionnaire_one_options_container">
            <div className="questionnaire_one_item_one">
              <QuestionnaireSquare
                questionnaireBoxImage={Plane}
                questionnaireBoxText={"Traveller"}
              />
            </div>
            <div className="questionnaire_one_item_two">
              <QuestionnaireSquare
                questionnaireBoxImage={House}
                questionnaireBoxText={"Local"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
