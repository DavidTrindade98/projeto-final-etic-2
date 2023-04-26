import "../../styles/questionnaire/questionnaire.css";
import LogoSmall2 from "../../components/LogoSmall2";
import QuestionnaireSquare from "../../components/QuestionnaireSquare";
import BackButton from "../../components/BackButton";
import NextButton from "../../components/NextButton";
import Female from "../../assets/female.svg";
import Male from "../../assets/male.svg";
import Horse from "../../assets/Vector.svg";
import VectorX from "../../assets/VectorX.svg";
import { useNavigate } from "react-router-dom";

export default function Questionnaire3() {

    const navigate = useNavigate();

  return (
    <div className="questionnaire_container">
        <div className="questionnaire_top_container">
          <BackButton />
          <LogoSmall2 />
        </div>
        <div className="questionnaire_middle_container">
          <div className="questionnaire_middle_container_text_container">
            <p id="questionnaire_index_text">{"3/5"}</p>
            <p id="questionnaire_question">{"Gender:"}</p>
          </div>
          <div className="questionnaire_options_container">
            <div className="questionnaire_option">
              <QuestionnaireSquare
                questionnaireBoxImage={Female}
                questionnaireBoxText={"Female"}
              />
            </div>
            <div className="questionnaire_option">
              <QuestionnaireSquare
                questionnaireBoxImage={Male}
                questionnaireBoxText={"Male"}
              />
            </div>
            <div className="questionnaire_option">
              <QuestionnaireSquare
                questionnaireBoxImage={Horse}
                questionnaireBoxText={"Complex"}
              />
            </div>
            <div className="questionnaire_option">
              <QuestionnaireSquare
                questionnaireBoxImage={VectorX}
                questionnaireBoxText={"Prefer not to say"}
              />
            </div>
          </div>
          <NextButton NextOnClick={() => {
            navigate("/Questionnaire4/");
          }}/>
        </div>
      </div>
  );
}