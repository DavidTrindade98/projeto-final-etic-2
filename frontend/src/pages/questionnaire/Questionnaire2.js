import React, { useContext } from "react";
import { QuestionnaireContext } from "./QuestionnaireContext";
import "../../styles/questionnaire/questionnaire.css";
import QuestionnaireSquare from "../../components/QuestionnaireSquare";
import NextButton from "../../components/NextButton";
import { useNavigate } from "react-router-dom";
import TopContainer from "../../components/TopContainer";
import Female from "../../assets/female.svg";
import Male from "../../assets/male.svg";
import Horse from "../../assets/Vector.svg";
import VectorX from "../../assets/VectorX.svg";

export default function Questionnaire2() {
  const navigate = useNavigate();
  const { questionnaireData, setQuestionnaireData } = useContext(
    QuestionnaireContext
  );

  const handleGenderSelection = (gender) => {
    setQuestionnaireData({ ...questionnaireData, gender });
  };

  const handleNext = () => {
    navigate("/Questionnaire3/");
  };

  return (
    <default-screen>
      <wrapper-screen>
        <TopContainer
          backButtonFill="white"
          logoSmallFill="white"
          backClick={() => navigate("/Questionnaire1")}
        />
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
                  questionnaireBoxClick={() => handleGenderSelection("Female")}
                />
              </div>
              <div className="questionnaire_option">
                <QuestionnaireSquare
                  questionnaireBoxImage={Male}
                  questionnaireBoxText={"Male"}
                  questionnaireBoxClick={() => handleGenderSelection("Male")}
                />
              </div>
              <div className="questionnaire_option">
                <QuestionnaireSquare
                  questionnaireBoxImage={Horse}
                  questionnaireBoxText={"Complex"}
                  questionnaireBoxClick={() => handleGenderSelection("Complex")}
                />
              </div>
              <div className="questionnaire_option">
                <QuestionnaireSquare
                  questionnaireBoxImage={VectorX}
                  questionnaireBoxText={"Prefer not to say"}
                  questionnaireBoxClick={() => handleGenderSelection("Prefer not to say")}
                />
              </div>
            </div>
            <NextButton NextOnClick={handleNext} />
          </div>
        </div>
      </wrapper-screen>
    </default-screen>
  );
}