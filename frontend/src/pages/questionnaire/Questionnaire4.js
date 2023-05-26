import React, { useContext } from "react";
import "../../styles/questionnaire/questionnaire.css";
import QuestionnaireSquare from "../../components/QuestionnaireSquare";
import Party from "../../assets/party.svg";
import Buildings from "../../assets/buildings.svg";
import Art from "../../assets/art.svg";
import History from "../../assets/history.svg";
import Music from "../../assets/music.svg";
import Sports from "../../assets/sports.svg";
import Adventure from "../../assets/adventure.svg";
import Spiritual from "../../assets/spiritual.svg";
import Nature from "../../assets/trees.svg";
import Food from "../../assets/food.svg";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import TopContainer from "../../components/TopContainer";
import { QuestionnaireContext } from "./QuestionnaireContext";

export default function Questionnaire4() {
  const navigate = useNavigate();
  const { questionnaireData, setQuestionnaireData, submitQuestionnaireData } = useContext(QuestionnaireContext);

  const handleOptionSelection = (option) => {
    if (questionnaireData.selectedOptions.includes(option)) {
      setQuestionnaireData({
        ...questionnaireData,
        selectedOptions: questionnaireData.selectedOptions.filter(
          (item) => item !== option
        ),
      });
    } else {
      setQuestionnaireData({
        ...questionnaireData,
        selectedOptions: [...questionnaireData.selectedOptions, option],
      });
    }
  };

  const handleNext = async () => {
    try {
      await submitQuestionnaireData(questionnaireData);

      // Navigate to the final page
      navigate("/Questionnaire5/");
    } catch (error) {
      // Handle error if submitting the questionnaire data fails
      console.error("Error submitting questionnaire data:", error);
    }
  };

  return (
    <default-screen>
      <wrapper-screen>
        <TopContainer
          backButtonFill="white"
          logoSmallFill="white"
          backClick={() => navigate("/Questionnaire3")}
        />
        <div className="questionnaire_container">
          <div className="questionnaire_middle_container">
            <div className="questionnaire_middle_container_text_container">
              <p id="questionnaire_index_text">{"4/4"}</p>
              <p id="questionnaire_question">
                {"Travel experience preferences:"}
              </p>
            </div>
            <div className="questionnaire_options_container">
              <div className="questionnaire_option">
                <QuestionnaireSquare
                  questionnaireBoxImage={Party}
                  questionnaireBoxText={"Party"}
                  questionnaireBoxClick={() => handleOptionSelection("Party")}
                />
              </div>
              <div className="questionnaire_option">
                <QuestionnaireSquare
                  questionnaireBoxImage={Buildings}
                  questionnaireBoxText={"Signtseeing"}
                  questionnaireBoxClick={() => handleOptionSelection("Signtseeing")}
                />
              </div>
              <div className="questionnaire_option">
                <QuestionnaireSquare
                  questionnaireBoxImage={Art}
                  questionnaireBoxText={"Art"}
                  questionnaireBoxClick={() => handleOptionSelection("Art")}
                />
              </div>
              <div className="questionnaire_option">
                <QuestionnaireSquare
                  questionnaireBoxImage={History}
                  questionnaireBoxText={"History"}
                  questionnaireBoxClick={() => handleOptionSelection("History")}
                />
              </div>
              <div className="questionnaire_option">
                <QuestionnaireSquare
                  questionnaireBoxImage={Music}
                  questionnaireBoxText={"Music"}
                  questionnaireBoxClick={() => handleOptionSelection("Music")}
                />
              </div>
              <div className="questionnaire_option">
                <QuestionnaireSquare
                  questionnaireBoxImage={Sports}
                  questionnaireBoxText={"Sports"}
                  questionnaireBoxClick={() => handleOptionSelection("Sports")}
                />
              </div>
              <div className="questionnaire_option">
                <QuestionnaireSquare
                  questionnaireBoxImage={Adventure}
                  questionnaireBoxText={"Adventure"}
                  questionnaireBoxClick={() => handleOptionSelection("Adventure")}
                />
              </div>
              <div className="questionnaire_option">
                <QuestionnaireSquare
                  questionnaireBoxImage={Spiritual}
                  questionnaireBoxText={"Spiritual"}
                  questionnaireBoxClick={() => handleOptionSelection("Spiritual")}
                />
              </div>
              <div className="questionnaire_option">
                <QuestionnaireSquare
                  questionnaireBoxImage={Nature}
                  questionnaireBoxText={"Nature"}
                  questionnaireBoxClick={() => handleOptionSelection("Nature")}
                />
              </div>
              <div className="questionnaire_option">
                <QuestionnaireSquare
                  questionnaireBoxImage={Food}
                  questionnaireBoxText={"Food"}
                  questionnaireBoxClick={() => handleOptionSelection("Food")}
                />
              </div>
            </div>
          </div>
          <Button
            buttonTextHolder={"Done"}
            buttonStyle={{ paddingTop: "40px", paddingBottom: "60px" }}
            buttonOnClick={handleNext}
          />
        </div>
      </wrapper-screen>
    </default-screen>
  );
}