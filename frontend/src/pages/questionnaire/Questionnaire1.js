import React, { useContext } from "react";
import "../../styles/questionnaire/questionnaire.css";
import QuestionnaireSquare from "../../components/QuestionnaireSquare";
import { QuestionnaireContext } from "./QuestionnaireContext";
import NextButton from "../../components/NextButton";
import { useNavigate } from "react-router-dom";
import TopContainer from "../../components/TopContainer";
import "../../styles/App.css";

export default function Questionnaire1() {
  
  // State variable and function to navigate to different routes
  const navigate = useNavigate();

  // Importing setAge function from QuestionnaireContext
  const { setAge } = useContext(QuestionnaireContext);

  const handleNext = (selectedAge) => {
    // Save the selected age to the context
    setAge(selectedAge);

    // Navigate to the next questionnaire page
    navigate("/Questionnaire2");
  };

  return (
    <default-screen>
      <wrapper-screen>
        <TopContainer
          backButtonFill="white"
          logoSmallFill="white"
          backClick={() => navigate("/TutorialSwiper/5")}
        />
        <div className="questionnaire-container">
          <div className="questionnaire-middle-container">
            <div className="questionnaire-middle-container-text-container">
              <p className="questionnaire-index-text">1/4</p>
              <p className="questionnaire-question">Age:</p>
            </div>
            <div className="questionnaire-options-container">
              <div className="questionnaire-option">
                <QuestionnaireSquare
                  questionnaireBoxImageStyle={{ display: "none" }}
                  questionnaireBoxText={"<20"}
                  questionnaireBoxClick={() => handleNext("<20")}
                />
              </div>
              <div className="questionnaire-option">
                <QuestionnaireSquare
                  questionnaireBoxImageStyle={{ display: "none" }}
                  questionnaireBoxText={"22-39"}
                  questionnaireBoxClick={() => handleNext("22-39")}
                />
              </div>
              <div className="questionnaire-option">
                <QuestionnaireSquare
                  questionnaireBoxImageStyle={{ display: "none" }}
                  questionnaireBoxText={"40-59"}
                  questionnaireBoxClick={() => handleNext("40-59")}
                />
              </div>
              <div className="questionnaire-option">
                <QuestionnaireSquare
                  questionnaireBoxImageStyle={{ display: "none" }}
                  questionnaireBoxText={"60+"}
                  questionnaireBoxClick={() => handleNext("60+")}
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
