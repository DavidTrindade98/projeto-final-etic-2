import "../../styles/faq/faq.css";
import TopContainer from "../../components/TopContainer";
import { useState } from "react";
import MenuOverlay from "../chat/MenuOverlay";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import down_arrow from "../../assets/down_arrow.svg";

export default function FAQ() {

  const navigate = useNavigate();

  // State for menu overlay
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  // State for selected question
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (index) => {
  // Check if the clicked question is already selected
  if (selectedQuestion === index) {
    // Deselect the question by setting selectedQuestion to null
    setSelectedQuestion(null);
  } else {
    // Select the clicked question by setting selectedQuestion to the index
    setSelectedQuestion(index);
  }
};

  return (
    <default-screen>
      <wrapper-screen>
        <TopContainer
          logoSmallFill={"white"}
          backButtonFill={"white"}
          backClick={() => navigate(-1)}
          logoClick={toggleMenu}
        />
        <div className={`menu-overlay ${isOpenMenu ? "open" : ""}`}>
          <div className="overlay-menu">
            <wrapper-screen>
              <TopContainer
                backButtonFill="#F0694F"
                logoStyle={{ display: "none" }}
                backClick={toggleMenu}
              />
              <MenuOverlay closeMenu={toggleMenu} />
            </wrapper-screen>
          </div>
        </div>
        <wrapper-chat>
          <div className="faq-container">
            <div className="faq-title">
              <h1 id="profile_title" style={{ color: "white" }}>
                Frequently<br></br>Asked Questions
              </h1>
            </div>
            <SearchBar searchBarText={"Search"} />
            <div className="faq-questions-container">
              <div
                className={`faq-question ${
                  selectedQuestion === 0 ? "faq-question-selected" : ""
                }`}
                onClick={() => handleQuestionClick(0)}
              >
                <img src={down_arrow} alt="down_arrow"></img>
                <h2>How does Dakee connect me with locals?</h2>
              </div>
              {selectedQuestion === 0 && (
                <div className="faq-answer">
                  <p>
                    Dakee uses a matching algorithm to pair you with locals who
                    share similar interests and preferences. Once you've matched
                    with a local, you can chat with them directly in the app to
                    plan your experience.
                  </p>
                </div>
              )}
              <div
                className={`faq-question ${
                  selectedQuestion === 0 ? "faq-question-selected" : ""
                }`}
                onClick={() => handleQuestionClick(1)}
              >
                <img src={down_arrow} alt="down_arrow"></img>
                <h2>Is Dakee free to use?</h2>
              </div>
              {selectedQuestion === 1 && (
                <div className="faq-answer">
                  <p>
                    Yes its free.
                  </p>
                </div>
              )}
              <div
                className={`faq-question ${
                  selectedQuestion === 0 ? "faq-question-selected" : ""
                }`}
                onClick={() => handleQuestionClick(2)}
              >
                <img src={down_arrow} alt="down_arrow"></img>
                <h2>Is this app free to use?</h2>
              </div>
              {selectedQuestion === 2 && (
                <div className="faq-answer">
                  <p>
                    Yes its free.
                  </p>
                </div>
              )}
              <div
                className={`faq-question ${
                  selectedQuestion === 0 ? "faq-question-selected" : ""
                }`}
                onClick={() => handleQuestionClick(3)}
              >
                <img src={down_arrow} alt="down_arrow"></img>
                <h2>Can i book tours or activities through the app with a recommended local?</h2>
              </div>
              {selectedQuestion === 3 && (
                <div className="faq-answer">
                  <p>
                    Dakee uses a matching algorithm to pair you with locals who
                    share similar interests and preferences. Once you've matched
                    with a local, you can chat with them directly in the app to
                    plan your experience.
                  </p>
                </div>
              )}
            </div>
          </div>
        </wrapper-chat>
      </wrapper-screen>
    </default-screen>
  );
}
