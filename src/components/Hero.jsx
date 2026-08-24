import { ThreeDMarquee } from "./lightswind/3d-marquee";

const images = [
  {
    src: "https://images.unsplash.com/photo-1519608487953-e999c86e7455",
    alt: "Montaña",
  },
  {
    src: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    alt: "Paisaje",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    alt: "Playa",
  },
  {
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    alt: "Naturaleza",
  },
  {
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    alt: "Naturaleza",
  },
  {
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    alt: "Naturaleza",
  },
  {
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    alt: "Naturaleza",
  },
];

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

      <div className="hero-visual">
        <ThreeDMarquee images={images} cols={4} className="hero-marquee w-[1000px]  " />
      </div>
    </section>
  )
}

export default Hero