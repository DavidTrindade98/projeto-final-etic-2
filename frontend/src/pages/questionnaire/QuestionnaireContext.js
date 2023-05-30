import React, { createContext, useState } from "react";
import "../../styles/App.css";
import "../../styles/questionnaire/questionnaire.css";
import "../../styles/questionnaire/questionnaire5.css";

export const QuestionnaireContext = createContext();

export const QuestionnaireProvider = ({ children }) => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [liveIn, setLiveIn] = useState("");
  const [cityAdvice, setCityAdvice] = useState("");
  const [experiences, setExperiences] = useState([]);

  return (
    <QuestionnaireContext.Provider
      value={{
        age,
        setAge,
        gender,
        setGender,
        liveIn,
        setLiveIn,
        cityAdvice,
        setCityAdvice,
        experiences,
        setExperiences,
      }}
    >
      {children}
    </QuestionnaireContext.Provider>
  );
};