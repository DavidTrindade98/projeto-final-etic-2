import "../../styles/questionnaire/questionnaire.css";
import LogoSmall2 from "../../components/LogoSmall2";
import QuestionnaireSquare from "../../components/QuestionnaireSquare";
import Plane from "../../assets/plane.svg";
import House from "../../assets/house.svg";
import BackButton from "../../components/BackButton";
import NextButton from "../../components/NextButton";

export default function Questionnaire({index_text, question_text,questionnaireBoxImage,questionnaireBoxText}) {

  return (
    <div className="questionnaire_container">
        <div className="questionnaire_top_container">
          <BackButton />
          <LogoSmall2 />
        </div>
        <div className="questionnaire_middle_container">
          <div className="questionnaire_middle_container_text_container">
            <p id="questionnaire_index_text">{index_text}</p>
            <p id="questionnaire_question">{question_text}</p>
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
        <NextButton />
        </div>
      </div>
  );
}
