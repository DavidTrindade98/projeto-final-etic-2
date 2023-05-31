import React, { createContext, useState } from "react";
import "../../styles/App.css";
import "../../styles/questionnaire/questionnaire.css";
import "../../styles/questionnaire/questionnaire5.css";

// Create a context to share the state values
export const QuestionnaireContext = createContext();

// Provider component to wrap the children components and provide the state values
export const QuestionnaireProvider = ({ children }) => {
  // State variables to manage the questionnaire data
  const [age, setAge] = useState("");                      // State variable for age
  const [gender, setGender] = useState("");                // State variable for gender
  const [liveIn, setLiveIn] = useState("");                // State variable for current location
  const [cityAdvice, setCityAdvice] = useState("");        // State variable for city advice
  const [experiences, setExperiences] = useState([]);      // State variable for experiences

  return (
    <QuestionnaireContext.Provider
      value={{
        age,                       // State value for age
        setAge,                    // Setter function for age
        gender,                    // State value for gender
        setGender,                 // Setter function for gender
        liveIn,                    // State value for current location
        setLiveIn,                 // Setter function for current location
        cityAdvice,                // State value for city advice
        setCityAdvice,             // Setter function for city advice
        experiences,               // State value for experiences
        setExperiences,            // Setter function for experiences
      }}
    >
      {children}                   
    </QuestionnaireContext.Provider>
  );
};