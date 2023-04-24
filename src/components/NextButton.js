import "../../src/styles/components/next_button.css";
import { useNavigate } from "react-router-dom";

export default function NextButton(){

    const navigate = useNavigate();

    return(
        <div className="next">
              <p id="next_text" onClick={() => navigate(+1)}>Next{">"}</p>
        </div>
    );
}