import "../../styles/questionnaire/questionnaire.css";
import "../../styles/questionnaire/questionnaire4.css";
import NextButton from "../../components/NextButton";
import { useNavigate } from "react-router-dom";
import TopContainer from "../../components/TopContainer";

export default function Questionnaire3() {
  const navigate = useNavigate();

  return (
    <default-screen>
      <wrapper-screen>
        <TopContainer backButtonFill="white" logoSmallFill="white"/>
        <div className="questionnaire_container">
          <div className="questionnaire_middle_container">
            <div className="questionnaire_middle_container_text_container">
              <p id="questionnaire_index_text">{"3/4"}</p>
              <p id="questionnaire_question">{"I currently live in:"}</p>
              <br></br>
              <input
                id="city_or_country"
                type="text"
                placeholder="City, Country"
              ></input>
              <br></br>
              <br></br>
              <br></br>
              <p id="questionnaire_question">{"I can give advices for:"}</p>
              <br></br>
              <input
                id="city_or_country"
                type="text"
                placeholder="City, Country"
              ></input>
            </div>

            <NextButton
              NextOnClick={() => {
                navigate("/Questionnaire4/");
              }}
            />
          </div>
        </div>
      </wrapper-screen>
    </default-screen>
  );
}
