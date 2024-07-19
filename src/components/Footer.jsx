import './styles/Footer.scss';
// import Button from './Button';
// import Circle from './Circle';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="col">
          <span>Get started</span>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="">Sign up</a>
            </li>
            <li>
              <a href="">Downloads</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <span>About us</span>
          <ul>
            <li>
              <a href="">Company information</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
            <li>
              <a href="">Reviews</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <span>Support</span>
          <ul>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Help desk</a>
            </li>
            <li>
              <a href="">Forums</a>
            </li>
          </ul>
        </div>
        {/* <div className="icon-container">
          <Circle type="2">
            <img src="./instagram.svg" alt="" />
          </Circle>
          <Circle type="2">
            <img src="./telegram.svg" alt="" />
          </Circle>
          <Circle type="2">
            <img src="./youtube.svg" alt="" />
          </Circle>
          <Circle type="2">
            <img src="./x.svg" alt="" />
          </Circle>
          <Button isPrimary={false}>Contact us</Button>
        </div> */}
      </div>
      <img src="./netflowai2.svg" alt="" className="footer-image" />
    </div>
  );
};

export default Footer;
