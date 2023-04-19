import './styles/App.css';
import { Routes, Route} from 'react-router-dom';
 
import FirstPage from './pages/welcome/FirstPage';
import SignupORlogin from './pages/welcome/SignupORlogin';
import TutorialSwiper from './pages/tutorial/TutorialSwiper';
import TutorialLastPage from './pages/tutorial/TutorialLastPage';
import SwiperTutorial from './pages/tutorial/SwiperTutorial';

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<FirstPage />} />
        <Route path="/SignupORlogin" element={<SignupORlogin />} />
        <Route path="/TutorialSwiper" element={<TutorialSwiper/>} />
        <Route path="/SwiperTutorial" element={<SwiperTutorial/>} />
        <Route path="/TutorialSwiper/Done" element={<TutorialLastPage/>} />
      </Route>
    </Routes>
  );
}

export default App;
