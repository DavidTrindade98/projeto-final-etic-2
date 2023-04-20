import "../styles/components/questionnaire_square.css";

export default function QuestionnaireSquare({questionnaireBoxClick,questionnaireBoxImage,questionnaireBoxText}){
    return(
        <div className="questionnaire_box" onClick={questionnaireBoxClick}>
            <img src={questionnaireBoxImage} alt="box_image" id="questionnaire_box_image"></img>
            <p id="questionnaire_box_text">{questionnaireBoxText}</p>
        </div>
    );
}
