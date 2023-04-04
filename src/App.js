import './styles/App.css';
import { Routes, Route} from 'react-router-dom';

import FirstPage from './pages/welcome/FirstPage';
import SignupORlogin from './pages/welcome/SignupORlogin';
import SignupPage from './pages/signup/SignupPage';

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<FirstPage />} />
        <Route path="/SignupORlogin" element={<SignupORlogin />} />
        <Route path="/Signup" element={<SignupPage />} />
      </Route>
    </Routes>
  );
}

export default App;
