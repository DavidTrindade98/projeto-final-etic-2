import './styles/App.css';
import { Routes, Route} from 'react-router-dom';
 
import FirstPage from './pages/welcome/FirstPage';
import SignupORlogin from './pages/welcome/SignupORlogin';
import Login from './pages/welcome/Login';
import TutorialSwiper from './pages/tutorial/TutorialSwiper';
import Questionnaire1 from './pages/questionnaire/Questionnaire1';
import Questionnaire2 from './pages/questionnaire/Questionnaire2';
import Questionnaire3 from './pages/questionnaire/Questionnaire3';
import Questionnaire4 from './pages/questionnaire/Questionnaire4';
import Questionnaire5 from './pages/questionnaire/Questionnaire5';
import SwiperTutorial from './pages/tutorial/SwiperTutorial';
import LocalsSearch from './pages/chat/LocalsSearch';
import FilterMenu from './pages/chat/FilterOverlay';
import ResultsPage from './pages/chat/ResultsPage';
import ChatPage from './pages/chat/ChatPage';
import MessagesPage from './pages/chat/MessagesPage';
import PersonDetails from './pages/chat/PersonDetails';
import MyProfile from './pages/profile/MyProfile';


function App() {
  return (
    <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/SignupORlogin" element={<SignupORlogin />} />
        <Route path="Login" element={<Login />} />
        <Route path="/TutorialSwiper" element={<TutorialSwiper/>}>
          <Route path="/TutorialSwiper/1" element={<TutorialSwiper/>} />
          <Route path="/TutorialSwiper/2" element={<TutorialSwiper/>} />
          <Route path="/TutorialSwiper/3" element={<TutorialSwiper/>} />
          <Route path="/TutorialSwiper/4" element={<TutorialSwiper/>} />
          <Route path="/TutorialSwiper/5" element={<TutorialSwiper/>} />
        </Route>
        <Route path="/SwiperTutorial" element={<SwiperTutorial />}></Route>
        <Route path="/Questionnaire1" element={<Questionnaire1/>}></Route>
        <Route path="/Questionnaire2" element={<Questionnaire2/>}></Route>
        <Route path="/Questionnaire3" element={<Questionnaire3/>}></Route>
        <Route path="/Questionnaire4" element={<Questionnaire4/>}></Route>
        <Route path="/Questionnaire5" element={<Questionnaire5/>}></Route>
        <Route path="/LocalsSearch" element={<LocalsSearch />}></Route>
        <Route path="/FilterOverlay" element={<FilterMenu />}></Route>
        <Route path="/ResultsPage" element={<ResultsPage/>} />
        <Route path="/Chat" element={<ChatPage/>} />
        <Route path="/Chat/Messages" element={<MessagesPage/>} />
        <Route path="/Chat/PersonDetails" element={<PersonDetails/>} />
        <Route path="/MyProfile" element={<MyProfile />} />
    </Routes>
  );
}

export default App;
