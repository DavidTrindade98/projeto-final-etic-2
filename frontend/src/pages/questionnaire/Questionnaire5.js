import Button from "../../components/Button";
import "../../styles/questionnaire/questionnaire.css";
import "../../styles/questionnaire/questionnaire5.css";
import TopContainer from "../../components/TopContainer";

export default function Questionnaire5() {
  return (
    <default-screen>
      <wrapper-screen>
        <TopContainer />
        <div className="questionnaire_container">
          <div className="questionnaire_middle_container5">
            <div className="questionnaire_middle_container_text_container">
              <pre id="questionnaire_index_text">
                {"Perfect!\nLet's start!"}
              </pre>
            </div>
          </div>
          <Button buttonTextHolder={"Ok"} />
        </div>
      </wrapper-screen>
    </default-screen>
  );
}
