import './styles/App.css';
import { Routes, Route} from 'react-router-dom';

import FirstPage from './pages/welcome/FirstPage';
import SignupORlogin from './pages/welcome/SignupORlogin';
import TutorialOne from './pages/tutorial/Tutorial_1';
import TutorialTwo from './pages/tutorial/Tutorial_2';


function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<FirstPage />} />
        <Route path="/SignupORlogin" element={<SignupORlogin />} />
        <Route path="/TutorialOne" element={<TutorialOne/>} />
        <Route path="/TutorialTwo" element={<TutorialTwo/>} />
      </Route>
    </Routes>
  );
}

export default App;
