import './styles/App.css';
import { Routes, Route} from 'react-router-dom';
 
import FirstPage from './pages/welcome/FirstPage';
import SignupORlogin from './pages/welcome/SignupORlogin';
import TutorialSwiper from './pages/tutorial/TutorialSwiper';

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
    </Routes>
  );
}

export default App;
