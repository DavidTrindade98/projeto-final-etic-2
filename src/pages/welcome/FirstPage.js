import '../../styles/welcome/welcome.css';
import logo from '../../assets/logo.svg';

export default function FirstPage() {
  return (
      <div className='first-page'>
        <div className='logo-slogan'>
            <img src={logo} id="logo" alt='logo' />
            <text>Live it like the Locals</text>
        </div>
      <div className='tap-anywhere'>
        <text>Tap anywhere to<br></br>continue</text>
      </div>
      </div>
  );
}

