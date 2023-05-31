import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TopContainer from "../../components/TopContainer";
import QuestionnaireSquare from "../../components/QuestionnaireSquare";
import NextButton from "../../components/NextButton";
import Female from "../../assets/female.svg";
import Male from "../../assets/male.svg";
import Horse from "../../assets/Vector.svg";
import VectorX from "../../assets/VectorX.svg";
import { QuestionnaireContext } from "./QuestionnaireContext";
import "../../styles/questionnaire/questionnaire.css";
import "../../styles/App.css";

export default function Questionnaire2() {
  
  // State variable and function to navigate to different routes
  const navigate = useNavigate();

  // Importing setGender function from QuestionnaireContext
  const { setGender } = useContext(QuestionnaireContext);

  const handleNext = (selectedGender) => {
    // Save the selected gender to the context
    setGender(selectedGender);

    // Navigate to the next questionnaire page
    navigate("/Questionnaire3");
  };

  return (
    <default-screen>
      <wrapper-screen>
        <TopContainer
          backButtonFill="white"
          logoSmallFill="white"
          backClick={() => navigate("/Questionnaire1")}
        />
        <div className="questionnaire-container">
          <div className="questionnaire-middle-container">
            <div className="questionnaire-middle-container-text-container">
              <p className="questionnaire-index-text">2/4</p>
              <p className="questionnaire-question">Gender:</p>
            </div>
            <div className="questionnaire-options-container">
              <div className="questionnaire-option">
                <QuestionnaireSquare
                  questionnaireBoxImage={Female}
                  questionnaireBoxText={"Female"}
                  questionnaireBoxClick={() => handleNext("Female")}
                />
              </div>
              <div className="questionnaire-option">
                <QuestionnaireSquare
                  questionnaireBoxImage={Male}
                  questionnaireBoxText={"Male"}
                  questionnaireBoxClick={() => handleNext("Male")}
                />
              </div>
              <div className="questionnaire-option">
                <QuestionnaireSquare
                  questionnaireBoxImage={Horse}
                  questionnaireBoxText={"Complex"}
                  questionnaireBoxClick={() => handleNext("Complex")}
                />
              </div>
              <div className="questionnaire-option">
                <QuestionnaireSquare
                  questionnaireBoxImage={VectorX}
                  questionnaireBoxText={"Prefer not to say"}
                  questionnaireBoxClick={() => handleNext("Prefer not to say")}
                />
              </div>
            </div>
          </div>
          <NextButton NextOnClick={handleNext} />
        </div>
      </wrapper-screen>
    </default-screen>
  );
}
