import Picaxe from "../images/Picaxe.png";
import Pikachu from "../images/Pikachu.png";
import Mario from "../images/Mario.png";
import Switch from "../images/Switch.png";
import {
  GlowingCards,
  GlowingCard,
} from "./lightswind/glowing-cards";

function Information() {
  return (
    <div className="information">
      <GlowingCards className="information-cards" gap="1.25rem" padding="1rem 0">
        <GlowingCard glowColor="#3b82f6" className="information-card">
          <img src={Picaxe} alt="Picaxe" className="information-card-image" />
          <h2>Discover</h2>
          <p>Explore a curated world of games, studios, and ideas.</p>
        </GlowingCard>

        <GlowingCard glowColor="#facc15" className="information-card">
          <img src={Pikachu} alt="Pikachu" className="information-card-image" />
          <h2>Play</h2>
          <p>Find your next favorite experience and start playing.</p>
        </GlowingCard>

        <GlowingCard glowColor="#f59e0b" className="information-card">
          <img src={Mario} alt="Mario" className="information-card-image" />
          <h2>Connect</h2>
          <p>Meet the publishers shaping the future of interactive worlds.</p>
        </GlowingCard>

        <GlowingCard glowColor="#f43f5e" className="information-card">
        <img src={Switch} alt="Switch" className="information-card-image" />
          <h2>Create</h2>
          <p>Turn bold ideas into memorable digital adventures.</p>
        </GlowingCard>
      </GlowingCards>
    </div>
  );
}

export default Information;