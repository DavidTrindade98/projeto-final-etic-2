import "../../styles/questionnaire/questionnaire.css";
import LogoSmall from "../../components/LogoSmall";
import QuestionnaireSquare from "../../components/QuestionnaireSquare";
import BackButton from "../../components/BackButton";
import NextButton from "../../components/NextButton";
import { useNavigate } from "react-router-dom";

export default function Questionnaire1() {
  const navigate = useNavigate();

  return (
    <div className="questionnaire_container">
        <div className="questionnaire_top_container">
          <BackButton />
          <LogoSmall />
        </div>
        <div className="questionnaire_middle_container">
          <div className="questionnaire_middle_container_text_container">
            <p id="questionnaire_index_text">{"1/4"}</p>
            <p id="questionnaire_question">{"Age:"}</p>
          </div>
          <div className="questionnaire_options_container">
            <div className="questionnaire_option">
              <QuestionnaireSquare
                questionnaireBoxImageStyle={{display:"none"}}
                questionnaireBoxText={"<20"}
              />
            </div>
            <div className="questionnaire_option">
              <QuestionnaireSquare
                questionnaireBoxImageStyle={{display:"none"}}
                questionnaireBoxText={"22-39"}
              />
            </div>
            <div className="questionnaire_option">
              <QuestionnaireSquare
                questionnaireBoxImageStyle={{display:"none"}}
                questionnaireBoxText={"40-59"}
              />
            </div>
            <div className="questionnaire_option">
              <QuestionnaireSquare
                questionnaireBoxImageStyle={{display:"none"}}
                questionnaireBoxText={"60+"}
              />
            </div>
          </div>
        <NextButton NextOnClick={() => {
            navigate("/Questionnaire2/");
          }}/>
        </div>
      </div>
  );
}