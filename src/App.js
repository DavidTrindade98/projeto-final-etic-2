import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import FirstPage from './pages/welcome/FirstPage';

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<FirstPage />} />
      </Route>
    </Routes>
  );
}

export default App;
