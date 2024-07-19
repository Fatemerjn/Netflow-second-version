import { Link, useLocation } from 'react-router-dom';
import './styles/Navbar.scss';

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="nav">
      <Link to="" className="logo">
        NF
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/example">Example</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Link
        to={location.pathname === '/register' ? '/' : '/register'}
        className="registry-container"
      >
        <div className="registry-image-container">
          <img src="./add-user.svg" alt="" />
        </div>
        <div to="/register" className="registry">
          {location.pathname === '/register' ? 'Go Back' : 'Create an Account'}
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
