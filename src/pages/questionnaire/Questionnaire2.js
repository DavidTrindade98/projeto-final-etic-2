import Questionnaire from "./Questionnaire";
import "../../styles/questionnaire/questionnaire.css";
import Plane from "../../assets/plane.svg";
import House from "../../assets/house.svg";
import { useNavigate } from "react-router-dom";



export default function Questionnaire1(){

    const navigate = useNavigate();

    return(
        <Questionnaire
        
        index_text= {"1/5"}
        question_text={"I am a:"}>
        </Questionnaire>
    );
}