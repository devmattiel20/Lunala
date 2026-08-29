import Logo from "../images/Logo.png";

function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="nav-brand">
        <img src={Logo} alt="Luvee Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/about">Acerca De</a></li>
        <li><a href="/contact">Catálogo</a></li>
         <li><a href="/plans">Planes+</a></li>
      </ul>
    </nav>
  );
}

export default Navbar