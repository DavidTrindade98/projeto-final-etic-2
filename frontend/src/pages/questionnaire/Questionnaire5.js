import Button from "../../components/Button";
import "../../styles/questionnaire/questionnaire.css";
import "../../styles/questionnaire/questionnaire5.css";
import TopContainer from "../../components/TopContainer";
import { useNavigate } from "react-router-dom";
import "../../styles/questionnaire/questionnaire.css";
import "../../styles/questionnaire/questionnaire4.css";
import { useContext } from "react";
import { QuestionnaireContext } from "./QuestionnaireContext";
import "../../styles/App.css";

export default function Questionnaire5() {
  // Importing navigate function from React Router DOM
  const navigate = useNavigate();

  // Importing values from QuestionnaireContext
  const { age, gender, liveIn, cityAdvice, experiences } = useContext(
    QuestionnaireContext
  );

  // Retrieving access token from local storage
  const accessToken = localStorage.getItem("accessToken");

  const handleSubmit = () => {
    // Prepare the data according to the API models
    const questionnaireData = {
      age: age,
      gender: gender,
      live_in: liveIn,
      city_advice: cityAdvice,
      experiences: experiences,
    };

    // Make an API call to submit the data
    fetch("http://localhost:8000/request/profile/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(questionnaireData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response
        navigate("/LocalsSearch");
        // You can navigate to a success page or perform any other actions
        console.log("Data submitted successfully:", data);
      })
      .catch((error) => {
        // Handle any error that occurs during the API call
        console.error("Error submitting data:", error);
      });
  };

  return (
    <default-screen>
      <wrapper-screen>
        <TopContainer
          backButtonFill="white"
          logoSmallFill="white"
          backClick={() => navigate("/Questionnaire4")}
        />
        <p
          className="questionnaire-index-text"
          style={{ marginBottom: "5vh", marginTop: "20vh" }}
        >
          Perfect!<br></br>Let{"’"}s start!
        </p>
        <div className="questionnaire-container">
          <div className="questionnaire-middle-container">
            <div className="questionnaire-middle-container-text-container"></div>
            <Button buttonTextHolder="Ok" buttonOnClick={handleSubmit} />
          </div>
        </div>
      </wrapper-screen>
    </default-screen>
  );
}
