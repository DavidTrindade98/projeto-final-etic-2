import React, { useContext, useState } from "react";
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
import "../../styles/questionnaire/questionnaire.css";
import "../../styles/App.css";

export default function Questionnaire4() {
  const navigate = useNavigate();
  const { setExperiences } = useContext(QuestionnaireContext);
  const [selectedExperiences, setSelectedExperiences] = useState([]);

  const handleExperienceClick = (experience) => {
    setSelectedExperiences((prevExperiences) => {
      if (prevExperiences.includes(experience)) {
        // Remove the experience if it's already selected
        return prevExperiences.filter((exp) => exp !== experience);
      } else {
        // Add the experience if it's not selected
        return [...prevExperiences, experience];
      }
    });
  };

  const handleNext = () => {
    // Save the selected experiences to the context
    setExperiences(selectedExperiences);

    // Navigate to the next questionnaire page
    navigate("/Questionnaire5");
  };

  return (
    <default-screen>
      <wrapper-screen>
        <TopContainer
          backButtonFill="white"
          logoSmallFill="white"
          backClick={() => navigate("/Questionnaire3")}
        />
        <div className="questionnaire-container">
          <div className="questionnaire-middle-container">
            <div className="questionnaire-middle-container-text-container">
              <p className="questionnaire-index-text">4/4</p>
              <p className="questionnaire-question">
                Travel experience preferences:
              </p>
            </div>
            <div className="questionnaire-options-container">
              <div className="questionnaire-option">
                <QuestionnaireSquare
                  questionnaireBoxImage={Party}
                  questionnaireBoxText="Party"
                  questionnaireBoxClick={() => handleExperienceClick("Party")}
                />
              </div>
              <div className="questionnaire-option">
                <QuestionnaireSquare
                  questionnaireBoxImage={Buildings}
                  questionnaireBoxText="Signtseeing"
                  questionnaireBoxClick={() =>
                    handleExperienceClick("Signtseeing")
                  }
                />
              </div>
              <div className="questionnaire-option">
                <QuestionnaireSquare
                  questionnaireBoxImage={Art}
                  questionnaireBoxText="Art"
                  questionnaireBoxClick={() => handleExperienceClick("Art")}
                />
              </div>
              <div className="questionnaire-option">
                <QuestionnaireSquare
                  questionnaireBoxImage={History}
                  questionnaireBoxText="History"
                  questionnaireBoxClick={() => handleExperienceClick("History")}
                />
              </div>
              <div className="questionnaire-option">
                <QuestionnaireSquare
                  questionnaireBoxImage={Music}
                  questionnaireBoxText="Music"
                  questionnaireBoxClick={() => handleExperienceClick("Music")}
                />
              </div>
              <div className="questionnaire-option">
                <QuestionnaireSquare
                  questionnaireBoxImage={Sports}
                  questionnaireBoxText="Sports"
                  questionnaireBoxClick={() => handleExperienceClick("Sports")}
                />
              </div>
              <div className="questionnaire-option">
                <QuestionnaireSquare
                  questionnaireBoxImage={Adventure}
                  questionnaireBoxText="Adventure"
                  questionnaireBoxClick={() =>
                    handleExperienceClick("Adventure")
                  }
                />
              </div>
              <div className="questionnaire-option">
                <QuestionnaireSquare
                  questionnaireBoxImage={Spiritual}
                  questionnaireBoxText="Spiritual"
                  questionnaireBoxClick={() =>
                    handleExperienceClick("Spiritual")
                  }
                />
              </div>
              <div className="questionnaire-option">
                <QuestionnaireSquare
                  questionnaireBoxImage={Nature}
                  questionnaireBoxText="Nature"
                  questionnaireBoxClick={() => handleExperienceClick("Nature")}
                />
              </div>
              <div className="questionnaire-option">
                <QuestionnaireSquare
                  questionnaireBoxImage={Food}
                  questionnaireBoxText="Food"
                  questionnaireBoxClick={() => handleExperienceClick("Food")}
                />
              </div>
            </div>
          </div>
          <Button buttonTextHolder="Done" buttonOnClick={handleNext} />
        </div>
      </wrapper-screen>
    </default-screen>
  );
}
