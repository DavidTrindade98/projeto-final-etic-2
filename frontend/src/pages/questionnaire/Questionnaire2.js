import "../../styles/questionnaire/questionnaire.css";
import QuestionnaireSquare from "../../components/QuestionnaireSquare";
import NextButton from "../../components/NextButton";
import Female from "../../assets/female.svg";
import Male from "../../assets/male.svg";
import Horse from "../../assets/Vector.svg";
import VectorX from "../../assets/VectorX.svg";
import { useNavigate } from "react-router-dom";
import TopContainer from "../../components/TopContainer";

export default function Questionnaire2() {
  const navigate = useNavigate();

  return (
    <default-screen>
      <wrapper-screen>
        <TopContainer backButtonFill="white" logoSmallFill="white"/>
        <div className="questionnaire_container">
          <div className="questionnaire_middle_container">
            <div className="questionnaire_middle_container_text_container">
              <p id="questionnaire_index_text">{"2/4"}</p>
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
            <NextButton
              NextOnClick={() => {
                navigate("/Questionnaire3/");
              }}
            />
          </div>
        </div>
      </wrapper-screen>
    </default-screen>
  );
}
