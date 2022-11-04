import logo from './google.svg';
import bg from './image/login-page.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="form">
          <div className="hero">
            <h1 className="hero-title">Welcome back, Olivia</h1>
            <p className="hero-text">
              Continue with Google or enter your details
            </p>
            <a
              className="google-link"
              href="https://accounts.google.com/v3/signin/identifier?dsh=S487038723%3A1667546704882330&authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2Fu%2F0%2F%3Futm_source%3DYouTubeWeb%26tab%3Drk%26utm_medium%3Dact%26tab%3Drk%26hl%3Den-GB&ec=GAlAwAE&hl=en-GB&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession">
              <img src={logo} alt="" />
              Login in with Google
            </a>
            <div className="hr">
              <hr />
              or <hr />
            </div>
          </div>
          <form action="post">
            <input type="text" id="input-email" required />
            <label htmlFor="input-email" className="email-label">
              Email
            </label>
            <br />
            <input type="password" id="input-password" required />
            <label htmlFor="input-password" className="password-label">
              Password
            </label>
            <br />
            <div className="box">
              <div>
                <input type="checkbox" id="check" />
                <label htmlFor="check">Remember for 30 days</label>
              </div>
              <a href="https://www.google.com/search?q=f&rlz=1C1GCEA_enUZ1026UZ1026&oq=f&aqs=chrome..69i57j69i59j69i61l2j69i60l4.2593j0j7&sourceid=chrome&ie=UTF-8">
                Forget password
              </a>
            </div>
            <br />
            <button className="submit" type="submit">
              Log in
            </button>
          </form>
          <div className="signup">
            <label htmlFor="sign">Don't have an account?</label>
            <a
              id="sign"
              href="https://accounts.google.com/v3/signin/identifier?dsh=S487038723%3A1667546704882330&authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2Fu%2F0%2F%3Futm_source%3DYouTubeWeb%26tab%3Drk%26utm_medium%3Dact%26tab%3Drk%26hl%3Den-GB&ec=GAlAwAE&hl=en-GB&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession">
              Sign up for free
            </a>
          </div>
        </div>
        <div className="image">
          <img className="background-image" src={bg} alt="" />
        </div>
      </header>
    </div>
  );
}

export default App;
