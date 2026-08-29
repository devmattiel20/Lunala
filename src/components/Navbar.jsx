import Logo from "../images/Logo.png";

function Navbar() {
  return (
    <nav className="nav-bar" aria-label="Navegación principal">
      <div className="nav-brand">
        <img src={Logo} alt="Luvee Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#information">Acerca De</a></li>
        <li><a href="#publishers">Catálogo</a></li>
        <li><a href="#subscription-title">Plan+</a></li>
      </ul>
    </nav>
  );
}

export default Navbar