import './styles/App.css';
import { Routes, Route} from 'react-router-dom';
import FirstPage from './pages/welcome/FirstPage';
import SignupORlogin from './pages/welcome/SignupORlogin';

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<FirstPage />} />
        <Route path="/SignupORlogin" element={<SignupORlogin />} />
      </Route>
    </Routes>
  );
}

export default App;
