import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <section className="footer-column footer-brand">
          <p className="footer-kicker">LUNALA</p>
          <h2>Juegos que dejan huella.</h2>
          <p>
            Un espacio para descubrir experiencias, estudios e ideas que
            convierten la imaginación en mundos jugables.
          </p>
        </section>

        <section className="footer-column">
          <h3>Explora</h3>
          <a href="#top">Inicio</a>
          <a href="#information">Nuestra visión</a>
          <a href="#publishers">Publishers</a>
          <a href="#subscription-title">Planes</a>
        </section>

        <section className="footer-column">
          <h3>Comunidad</h3>
          <p>Recibe novedades sobre nuevos lanzamientos y creadores.</p>
          <a href="mailto:hola@lunala.games">hola@lunala.games</a>
          <a href="#subscription-email">Unirme a Lunala</a>
        </section>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Lunala Studio</span>
        <span>Creado para quienes miran más allá.</span>
      </div>
    </footer>
  );
}

export default Footer;