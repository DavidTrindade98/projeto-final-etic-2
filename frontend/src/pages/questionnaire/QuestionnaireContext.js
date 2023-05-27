import React, { createContext, useState } from "react";

export const QuestionnaireContext = createContext();

export const QuestionnaireProvider = ({ children }) => {
  const [questionnaireData, setQuestionnaireData] = useState({
    selectedOptions: [],
  });

  const submitQuestionnaireData = async (data) => {
    try {
      const token = localStorage.getItem("authenticationToken");

      const response = await fetch("http://localhost:8000/request/profile/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Questionnaire data submitted successfully");
      } else {
        throw new Error("Error submitting questionnaire data");
      }
    } catch (error) {
      console.error("Error submitting questionnaire data:", error);
    }
  };

  return (
    <QuestionnaireContext.Provider
      value={{
        questionnaireData,
        setQuestionnaireData,
        submitQuestionnaireData,
      }}
    >
      {children}
    </QuestionnaireContext.Provider>
  );
};