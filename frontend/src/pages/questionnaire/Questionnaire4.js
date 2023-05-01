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

export default function Questionnaire4() {
  const navigate = useNavigate();

  return (
    <default-screen>
      <wrapper-screen>
        <TopContainer />
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
                />
              </div>
              <div className="questionnaire_option">
                <QuestionnaireSquare
                  questionnaireBoxImage={Buildings}
                  questionnaireBoxText={"Signtseeing"}
                />
              </div>
              <div className="questionnaire_option">
                <QuestionnaireSquare
                  questionnaireBoxImage={Art}
                  questionnaireBoxText={"Art"}
                />
              </div>
              <div className="questionnaire_option">
                <QuestionnaireSquare
                  questionnaireBoxImage={History}
                  questionnaireBoxText={"History"}
                />
              </div>
              <div className="questionnaire_option">
                <QuestionnaireSquare
                  questionnaireBoxImage={Music}
                  questionnaireBoxText={"Music"}
                />
              </div>
              <div className="questionnaire_option">
                <QuestionnaireSquare
                  questionnaireBoxImage={Sports}
                  questionnaireBoxText={"Sports"}
                />
              </div>
              <div className="questionnaire_option">
                <QuestionnaireSquare
                  questionnaireBoxImage={Adventure}
                  questionnaireBoxText={"Adventure"}
                />
              </div>
              <div className="questionnaire_option">
                <QuestionnaireSquare
                  questionnaireBoxImage={Spiritual}
                  questionnaireBoxText={"Spiritual"}
                />
              </div>
              <div className="questionnaire_option">
                <QuestionnaireSquare
                  questionnaireBoxImage={Nature}
                  questionnaireBoxText={"Nature"}
                />
              </div>
              <div className="questionnaire_option">
                <QuestionnaireSquare
                  questionnaireBoxImage={Food}
                  questionnaireBoxText={"Food"}
                />
              </div>
            </div>
          </div>
          <Button
            buttonTextHolder={"Done"}
            buttonStyle={{ paddingTop: "40px", paddingBottom: "60px" }}
            buttonOnClick={() => {
              navigate("/Questionnaire5/");
            }}
          />
        </div>
      </wrapper-screen>
    </default-screen>
  );
}
