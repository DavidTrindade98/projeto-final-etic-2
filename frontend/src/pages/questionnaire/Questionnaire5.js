import Button from "../../components/Button";
import LogoSmall from "../../components/LogoSmall";
import BackButton from "../../components/BackButton";
import "../../styles/questionnaire/questionnaire.css";
import "../../styles/questionnaire/questionnaire5.css";

export default function Questionnaire5() {

    return (
        <div className="questionnaire_container">
            <div className="questionnaire_top_container">
                <BackButton />
                <LogoSmall />
            </div>

            <div className="questionnaire_middle_container5">
                <div className="questionnaire_middle_container_text_container">
                    <pre id="questionnaire_index_text">{"Perfect!\nLet's start!"}</pre>
                </div>
            </div>
            <Button
                buttonTextHolder={"Ok"}

            />
        </div>
    );
}