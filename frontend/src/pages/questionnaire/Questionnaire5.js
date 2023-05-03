import Button from "../../components/Button";
import "../../styles/questionnaire/questionnaire.css";
import "../../styles/questionnaire/questionnaire5.css";
import TopContainer from "../../components/TopContainer";
import { useNavigate } from "react-router-dom";

export default function Questionnaire5() {

  const navigate = useNavigate();
  
  return (
    <default-screen>
      <wrapper-screen>
        <TopContainer backButtonFill="white" logoSmallFill="white"/>
        <div className="questionnaire_container">
          <div className="questionnaire_middle_container5">
            <div className="questionnaire_middle_container_text_container">
              <pre id="questionnaire_index_text">
                {"Perfect!\nLet's start!"}
              </pre>
            </div>
          </div>
          <Button buttonTextHolder={"Ok"} buttonOnClick={() => navigate("/LocalsSearch")} />
        </div>
      </wrapper-screen>
    </default-screen>
  );
}
