import '../styles/Home.scss';
import Button from '../components/Button';

const Home = () => {
  return (
    <>
      <div className="section-1">
        <div className="sub-section left">
          <div className="title">
            <h1 className="gabby">Welcome to</h1>
            <h1 className="gabby">NetFlowAI!</h1>
          </div>
          <div className="sub-title">
            Boost your productivity with our innovative AI-powered network.
            Combine Al modules Create complex network. Unlock limitless
            possibilities.
          </div>
          <br />
          <div>What is NetFlowAI? ...</div>
          <div className="icons">instagram, telegram, youtube, X</div>
          <div className="button-container">
            <Button isPrimary={true}>Get Started</Button>
            <Button>Free Trial</Button>
          </div>
          {/* <div>
            play button
            <span>Watch demo</span>
          </div> */}
        </div>

        <div className="sub-section right">
          <div className="image-container">
            <img src="./image-1.svg" alt="" style={{ width: '100%' }} />
          </div>
        </div>
      </div>

      <section className="prompt-container">
        <div className="normal-prompt-container">
          <textarea
            name=""
            id="normal-prompt"
            cols="30"
            rows="5"
            placeholder="Enter Prompt..."
          />
        </div>
        <div className="super-prompt-container">
          <textarea
            name=""
            id="super-prompt"
            cols="30"
            rows="5"
            placeholder="Super Prompt..."
          />
        </div>
      </section>

      <section className="photo-container"></section>

      <section className="demo-container">aye</section>
    </>
  );
};

export default Home;
