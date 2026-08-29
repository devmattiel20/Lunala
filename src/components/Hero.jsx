import HeroVideo from "../images/HeroVideo.mp4";
import AsciiWave from "./lightswind/ascii-wave";

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <p className="hero-label">EL NEXUS DE LOS VIDEOJUEGOS</p>

        <h1>
          GAMES
          <span>SIN LÍMITES</span>
        </h1>

        <p className="hero-description">
          Tu juego. Tu mundo.
        </p>

        <button className="hero-button">
          <a href="#publishers">Empieza a jugar</a>
          
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