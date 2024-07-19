import { Link } from 'react-router-dom';
import '../styles/About.scss';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <div className="about-text">
          <h1>Our Journey, Your Future</h1>
          <p>
            Discover the story of NetFlowAI, the team behind it, and our vision
            for a smarter future.
          </p>
        </div>
        <img src="./about-1.svg" alt="" className="about-image" />
      </section>
      <section className="about-section">
        <img src="./about-2.svg" alt="" className="about-image" />
        <div className="about-text">
          <h1 className="about-header">Our story</h1>
          <p>
            NetFlowAI started with a simple yet revolutionary idea – make the
            power of AI accessible to everyone. Our mission is to democratize
            AI, turning it from a complex and daunting technology into an
            easy-to-use and transformative tool for businesses and individuals
            alike.
          </p>
        </div>
      </section>
      <section className="about-section">
        <div className="about-text">
          <h1 className="about-header">Our team</h1>
          <p>
            We are a team of innovators, dreamers, and creators who share a
            passion for technology and a belief in the power of AI. Our diverse
            skills and backgrounds, united by our vision, make NetFlowAI the
            innovative and unique platform it is today.
          </p>
        </div>
        <img src="./about-3.svg" alt="" className="about-image" />
      </section>
      <section className="about-section">
        <img src="./about-4.svg" alt="" className="about-image" />
        <div className="about-text">
          <h1 className="about-header">Our vision</h1>
          <p>
            Our vision is a world where everyone can tap into the power of AI, a
            world where complex tasks are simplified, and productivity is
            amplified. By providing the tools and the platform to create complex
            AI networks, we're taking significant steps towards that future.
          </p>
        </div>
      </section>
      <section className="about-join">
        <Link to="/register">Join us today</Link>
      </section>
    </div>
  );
};

export default About;
