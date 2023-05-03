import { Button } from "../Button/Button";
import "./HeroSectionStyles.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>Tagline</h1>
      <p>question?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          ACTION
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH VIDEO <i class="fa-solid fa-circle-play" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
