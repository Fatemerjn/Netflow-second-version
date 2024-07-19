import '../styles/Register.scss';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="auth-container">
      <div className="title">
        <h1 className="gabby">NetFlowAI</h1>
      </div>
      <Button text="Continue with Google" />
      <Button text="Continue with Github" />
      <span>or</span>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <Button text="Sign in" />
      <span>By clicking “Sign in”or”sign up”you agree to TERMS oF SERVICE</span>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Register;
