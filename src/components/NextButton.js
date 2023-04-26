import "../../src/styles/components/next_button.css";

export default function NextButton({NextOnClick}){
    return(
        <div className="next">
              <p id="next_text" onClick={NextOnClick}>Next{">"}</p>
        </div>
    );
}