import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopContainer from "../../components/TopContainer";
import NextButton from "../../components/NextButton";
import { QuestionnaireContext } from "./QuestionnaireContext";
import "../../styles/questionnaire/questionnaire.css";
import "../../styles/App.css";

export default function Questionnaire3() {
  // State variable and function to navigate to different routes
  const navigate = useNavigate();

  // Importing setLiveIn and setCityAdvice functions from QuestionnaireContext
  const { setLiveIn, setCityAdvice } = useContext(QuestionnaireContext);

  // State variable and function to track the local live-in value
  const [localLiveIn, setLocalLiveIn] = useState("");

  // State variable and function to track the local city advice array
  const [localCityAdvice, setLocalCityAdvice] = useState([]);

  const handleNext = () => {
    // Save the input values to the context
    setLiveIn(localLiveIn);
    setCityAdvice(localCityAdvice.split(",").map((advice) => advice.trim()));

    // Navigate to the next questionnaire page
    navigate("/Questionnaire4");
  };

  return (
    <default-screen>
      <wrapper-screen>
        <TopContainer
          backButtonFill="white"
          logoSmallFill="white"
          backClick={() => navigate("/Questionnaire2")}
        />
        <div className="questionnaire-container">
          <div className="questionnaire-middle-container">
            <div className="questionnaire-middle-container-text-container">
              <p className="questionnaire-index-text">3/4</p>
              <p className="questionnaire-question">I currently live in:</p>
              <br />
              <input
                type="text"
                id="city_or_country"
                placeholder="City, Country"
                value={localLiveIn}
                onChange={(e) => setLocalLiveIn(e.target.value)}
              />
              <br />
              <br />
              <br />
              <p className="questionnaire-question">I can give advice for:</p>
              <br />
              <input
                type="text"
                id="city_or_country"
                placeholder="City, Country"
                value={localCityAdvice}
                onChange={(e) => setLocalCityAdvice(e.target.value)}
              />
            </div>
            <NextButton NextOnClick={handleNext} />
          </div>
        </div>
      </wrapper-screen>
    </default-screen>
  );
}
