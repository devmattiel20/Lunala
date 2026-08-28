import HeroVideo from "../images/HeroVideo.mp4";
import AsciiWave from "./lightswind/ascii-wave";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-label">THE FUTURE OF GAMES</p>

        <h1>
          GAMES
          <span>WITHOUT LIMITS</span>
        </h1>

        <p className="hero-description">
          Your Game. Your world.
        </p>

        <button className="hero-button">
          START PLAYING
        </button>
      </div>
      <div className="hero-video">
        <video autoPlay muted loop playsInline preload="metadata">
          <source src={HeroVideo} type="video/mp4" />
          Tu navegador no soporta la reproducción de video.
        </video>
      </div>

      <div className="wave" aria-hidden="true">
        <AsciiWave color="#5ee7ff" speed={1} />
      </div>
    </section>
    
  );
}

export default Hero