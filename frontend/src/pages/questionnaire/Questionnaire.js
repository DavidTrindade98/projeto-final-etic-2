import "../../styles/questionnaire/questionnaire.css";
import LogoSmall from "../../components/LogoSmall";
import QuestionnaireSquare from "../../components/QuestionnaireSquare";
import BackButton from "../../components/BackButton";
import NextButton from "../../components/NextButton";

export default function Questionnaire({index_text, question_text,questionnaireBoxImage,questionnaireBoxText}) {

  return (
    <div className="questionnaire_container">
        <div className="questionnaire_top_container">
          <BackButton />
          <LogoSmall />
        </div>
        <div className="questionnaire_middle_container">
          <div className="questionnaire_middle_container_text_container">
            <p id="questionnaire_index_text">{index_text}</p>
            <p id="questionnaire_question">{question_text}</p>
          </div>
          <div className="questionnaire_options_container">
            <div className="questionnaire_option">
              <QuestionnaireSquare
              />
            </div>
            <div className="questionnaire_option">
              <QuestionnaireSquare
              />
            </div>
          </div>
        <NextButton />
        </div>
      </div>
  );
}
