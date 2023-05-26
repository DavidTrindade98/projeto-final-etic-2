import React, { useContext, useState } from "react";
import "../../styles/questionnaire/questionnaire.css";
import "../../styles/questionnaire/questionnaire4.css";
import NextButton from "../../components/NextButton";
import { useNavigate } from "react-router-dom";
import TopContainer from "../../components/TopContainer";
import { QuestionnaireContext } from "./QuestionnaireContext";

export default function Questionnaire3() {
  const navigate = useNavigate();
  const { questionnaireData, setQuestionnaireData } = useContext(QuestionnaireContext);
  const [currentLocation, setCurrentLocation] = useState("");
  const [adviceLocation, setAdviceLocation] = useState("");

  const handleNext = () => {
    setQuestionnaireData({
      ...questionnaireData,
      currentLocation,
      adviceLocation
    });
    navigate("/Questionnaire4/");
  };

  return (
    <default-screen>
      <wrapper-screen>
        <TopContainer
          backButtonFill="white"
          logoSmallFill="white"
          backClick={() => navigate("/Questionnaire2")}
        />
        <div className="questionnaire_container">
          
            <div className="questionnaire_middle_container_text_container">
              <p id="questionnaire_index_text">{"3/4"}</p>
              <p id="questionnaire_question">{"I currently live in:"}</p>
              <br />
              <input
                
                type="text"
                placeholder="City, Country"
                value={currentLocation}
                onChange={(e) => setCurrentLocation(e.target.value)}
              />
              <br />
              <br />
              <br />
              <p id="questionnaire_question">{"I can give advice for:"}</p>
              <br />
              <input
                
                type="text"
                placeholder="City, Country"
                value={adviceLocation}
                onChange={(e) => setAdviceLocation(e.target.value)}
              />
            </div>

            <NextButton NextOnClick={handleNext} />
          
        </div>
      </wrapper-screen>
    </default-screen>
  );
}