import "../../styles/welcome/SignupORlogin.css";
import "../../styles/App.css";
import logo from "../../assets/logo.svg";

export default function SignupORloginPage() {
  return (
    <default-screen>
      <div className="SignupORloginPage">
        <img src={logo} id="logo-signup" alt="logo" />
        <text id="hey-have-we-met">
          Hey,<br></br>have we met?
        </text>
      </div>
    </default-screen>
  );
}
