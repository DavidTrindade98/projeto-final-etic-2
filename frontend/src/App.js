import "./styles/App.css";

import { Routes, Route } from "react-router-dom";
import { QuestionnaireProvider } from "./pages/questionnaire/QuestionnaireContext";
import FirstPage from "./pages/welcome/FirstPage";
import LoginOrSignup from "./pages/welcome/LoginOrSignup";
import Signup from "./pages/welcome/Signup";
import Login from "./pages/welcome/Login";
import TutorialSwiper from "./pages/tutorial/TutorialSwiper";
import Questionnaire1 from "./pages/questionnaire/Questionnaire1";
import Questionnaire2 from "./pages/questionnaire/Questionnaire2";
import Questionnaire3 from "./pages/questionnaire/Questionnaire3";
import Questionnaire4 from "./pages/questionnaire/Questionnaire4";
import Questionnaire5 from "./pages/questionnaire/Questionnaire5";
import LocalsSearch from "./pages/chat/LocalsSearch";
import FilterMenu from "./pages/chat/FilterOverlay";
import ResultsPage from "./pages/chat/ResultsPage";
import ChatPage from "./pages/chat/ChatPage";
import MessagesPage from "./pages/chat/MessagesPage";
import PersonDetails from "./pages/chat/PersonDetails";
import MyProfile from "./pages/profile/MyProfile";
import EditProfile from "./pages/profile/EditProfile";
import ProfileUpdated from "./pages/profile/ProfileUpdated";
import GetRewards from "./pages/rewards/GetRewards";
import IndividualReward from "./pages/rewards/IndividualReward";
import RewardSuccess from "./pages/rewards/RewardSuccess";
import FAQ from "./pages/faq/FAQ";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/LoginORSignup" element={<LoginOrSignup />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/TutorialSwiper" element={<TutorialSwiper />}>
        <Route path="/TutorialSwiper/1" element={<TutorialSwiper />} />
        <Route path="/TutorialSwiper/2" element={<TutorialSwiper />} />
        <Route path="/TutorialSwiper/3" element={<TutorialSwiper />} />
        <Route path="/TutorialSwiper/4" element={<TutorialSwiper />} />
        <Route path="/TutorialSwiper/5" element={<TutorialSwiper />} />
      </Route>
      <Route
        path="/Questionnaire1"
        element={
          <QuestionnaireProvider>
            <Questionnaire1 />
          </QuestionnaireProvider>
        }
      />
      <Route
        path="/Questionnaire2"
        element={
          <QuestionnaireProvider>
            <Questionnaire2 />
          </QuestionnaireProvider>
        }
      />
      <Route
        path="/Questionnaire3"
        element={
          <QuestionnaireProvider>
            <Questionnaire3 />
          </QuestionnaireProvider>
        }
      />
      <Route
        path="/Questionnaire4"
        element={
          <QuestionnaireProvider>
            <Questionnaire4 />
          </QuestionnaireProvider>
        }
      />
      <Route
        path="/Questionnaire5"
        element={
          <QuestionnaireProvider>
            <Questionnaire5 />
          </QuestionnaireProvider>
        }
      />
      <Route path="/LocalsSearch" element={<LocalsSearch />}></Route>
      <Route path="/FilterOverlay" element={<FilterMenu />}></Route>
      <Route path="/ResultsPage" element={<ResultsPage />} />
      <Route path="/Chat" element={<ChatPage />} />
      <Route path="/Chat/Messages" element={<MessagesPage />} />
      <Route path="/Chat/PersonDetails" element={<PersonDetails />} />
      <Route path="/MyProfile" element={<MyProfile />} />
      <Route path="/EditProfile" element={<EditProfile />} />
      <Route path="/ProfileUpdated" element={<ProfileUpdated />} />
      <Route path="/GetRewards" element={<GetRewards />} />
      <Route path="/IndividualReward" element={<IndividualReward />} />
      <Route path="/RewardSuccess" element={<RewardSuccess />} />
      <Route path="/FAQ" element={<FAQ />} />
    </Routes>
  );
}

export default App;
