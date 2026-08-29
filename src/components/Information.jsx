import Picaxe from "../images/Picaxe.png";
import Pikachu from "../images/Pikachu.png";
import Mario from "../images/Mario.png";
import Switch from "../images/Switch.png";
import { GlowingCards, GlowingCard } from "./lightswind/glowing-cards";

function Information() {
  return (
    <div className="container-informacion">
      <div className="info-tittle">
        <h1>Jugar con Luvee</h1>
      </div>
      ,
      <div id="information" className="information">
        <GlowingCards
          className="information-cards"
          gap="1.75rem"
          padding="1rem 0"
        >
          <GlowingCard glowColor="#3b82f6" className="information-card">
            <img src={Picaxe} alt="Picaxe" className="information-card-image" />
            <h2>Descubrir</h2>
            <p>
              Explora un mundo cuidadosamente seleccionado de juegos, estudios e
              ideas..
            </p>
          </GlowingCard>

          <GlowingCard glowColor="#facc15" className="information-card">
            <img
              src={Pikachu}
              alt="Pikachu"
              className="information-card-image"
            />
            <h2>Jugar</h2>
            <p>
              Encuentra tu próxima experiencia favorita y empieza a jugar a lo
              grande.
            </p>
          </GlowingCard>

          <GlowingCard glowColor="#f59e0b" className="information-card">
            <img src={Mario} alt="Mario" className="information-card-image" />
            <h2>Connect</h2>
            <p>
              Conozca a las editoriales que están dando forma al futuro de los
              mundos interactivos.
            </p>
          </GlowingCard>

          <GlowingCard glowColor="#f43f5e" className="information-card">
            <img src={Switch} alt="Switch" className="information-card-image" />
            <h2>Create</h2>
            <p>Transforma ideas audaces en aventuras digitales memorables y geniales.</p>
          </GlowingCard>
        </GlowingCards>
      </div>
    </div>
  );
}

export default Information;
