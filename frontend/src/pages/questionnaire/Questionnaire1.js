import React, { useContext } from "react";
import "../../styles/questionnaire/questionnaire.css";
import QuestionnaireSquare from "../../components/QuestionnaireSquare";
import { QuestionnaireContext } from "./QuestionnaireContext";
import NextButton from "../../components/NextButton";
import { useNavigate } from "react-router-dom";
import TopContainer from "../../components/TopContainer";

export default function Questionnaire1() {
  const navigate = useNavigate();
  const { questionnaireData, setQuestionnaireData } = useContext(
    QuestionnaireContext
  );

  const handleAgeSelection = (age) => {
    setQuestionnaireData({ ...questionnaireData, age });
    console.log("Chosennn")
  };

  const handleNext = () => {
    navigate("/Questionnaire2/");
  };

  return (
    <default-screen>
      <wrapper-screen>
        <TopContainer
          backButtonFill="white"
          logoSmallFill="white"
          backClick={() => navigate("/TutorialSwiper/5")}
        />
        <div className="questionnaire_container">
          <div className="questionnaire_middle_container">
            <div className="questionnaire_middle_container_text_container">
              <p id="questionnaire_index_text">{"1/4"}</p>
              <p id="questionnaire_question">{"Age:"}</p>
            </div>
            <div className="questionnaire_options_container">
              <div className="questionnaire_option">
                <QuestionnaireSquare
                  questionnaireBoxImageStyle={{ display: "none" }}
                  questionnaireBoxText={"<20"}
                  questionnaireBoxClick={() => handleAgeSelection("<20")}
                />
              </div>
              <div className="questionnaire_option">
                <QuestionnaireSquare
                  questionnaireBoxImageStyle={{ display: "none" }}
                  questionnaireBoxText={"22-39"}
                  questionnaireBoxClick={() => handleAgeSelection("22-39")}
                />
              </div>
              <div className="questionnaire_option">
                <QuestionnaireSquare
                  questionnaireBoxImageStyle={{ display: "none" }}
                  questionnaireBoxText={"40-59"}
                  questionnaireBoxClick={() => handleAgeSelection("40-59")}
                />
              </div>
              <div className="questionnaire_option">
                <QuestionnaireSquare
                  questionnaireBoxImageStyle={{ display: "none" }}
                  questionnaireBoxText={"60+"}
                  questionnaireBoxClick={() => handleAgeSelection("60+")}
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