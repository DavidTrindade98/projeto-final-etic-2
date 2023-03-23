import '../../styles/App.css';
import logo from '../../assets/logo.svg';
import logo_slogan from '../../assets/logo_slogan.svg'

export default function FirstPage() {
  return (
      <div className='first-page'>
        <div className='logo'>
            <img src={logo} id="logo" alt='logo' />
            <img src={logo_slogan} id="logo_slogan" alt='logo_slogan'></img>
        <div className='tap-anywhere'>
          <p>Tap anywhere to<br></br>continue</p>
        </div>
        </div>
      </div>
  );
}

