import './styles/App.css';
import logo from './assets/logo.svg';
import logo_slogan from './assets/logo_slogan.svg'

function App() {
  return (
    <div className="App">
      <div className='first-page'>
        <div className='logo'>
        <img src={logo} id="logo" alt='logo' />
        <img src={logo_slogan} id="logo_slogan" alt='logo_slogan'></img>
        </div>
      </div>
    </div>
  );
}

export default App;
