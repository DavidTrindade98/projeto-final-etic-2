import './styles/App.css';
import { Routes, Route} from 'react-router-dom';
 
import FirstPage from './pages/welcome/FirstPage';
import SignupORlogin from './pages/welcome/SignupORlogin';
import TutorialSwiper from './pages/tutorial/TutorialSwiper';
import Questionnaire1 from './pages/questionnaire/Questionnaire1';
import Questionnaire2 from './pages/questionnaire/Questionnaire2';

function App() {
  return (
    <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/SignupORlogin" element={<SignupORlogin />} />
        <Route path="/TutorialSwiper" element={<TutorialSwiper/>}>
          <Route path="/TutorialSwiper/1" element={<TutorialSwiper/>} />
          <Route path="/TutorialSwiper/2" element={<TutorialSwiper/>} />
          <Route path="/TutorialSwiper/3" element={<TutorialSwiper/>} />
          <Route path="/TutorialSwiper/4" element={<TutorialSwiper/>} />
          <Route path="/TutorialSwiper/5" element={<TutorialSwiper/>} />
        </Route>
        <Route path="/Questionnaire1" element={<Questionnaire1/>}></Route>
        <Route path="/Questionnaire2" element={<Questionnaire2/>}></Route>
    </Routes>
  );
}

export default App;
