import '../styles/Login.scss';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Circle from '../components/Circle';

const Login = () => {
  return (
    <div className="auth-container">
      <div className="title">
        <span className="gabby">NetFlowAI</span>
      </div>
      <div className="quick-login-container">
        <Button isPrimary={false}>
          Continue with Google{' '}
          <Circle type="3">
            <img src="./google.svg" alt="" />
          </Circle>
        </Button>
        <Button isPrimary={false}>
          Continue with Github
          <Circle type="3">
            <img src="./github.svg" alt="" />
          </Circle>
        </Button>
      </div>
      <div className="separator">
        <span>or</span>
      </div>
      <form className="login-form">
        <input type="text" id="email-field" />
        <label htmlFor="email-field" className="email-label">
          Email
        </label>

        <input type="password" id="password-field" />
        <label htmlFor="password-field" className="password-label">
          Password
        </label>
        <Button type="submit" isPrimary={true}>
          Sign in
        </Button>
      </form>
      <span className="sub-form-text">
        By clicking "Sign in" or "sign up" you agree to{' '}
        <Link to="/tos">TERMS oF SERVICE</Link>
      </span>
      <span className="bottom-link">
        <Link to="/register">Sign up</Link>
      </span>
    </div>
  );
};

export default Login;
