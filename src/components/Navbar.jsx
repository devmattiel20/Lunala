import Logo from "../images/Logo.png";

function Navbar() {
  return (
    <nav className="nav-bar" aria-label="Main navigation">
      <div className="nav-brand" href="/" aria-label="Luvee home">
        <img src={Logo} alt="Luvee Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
         <li><a href="/plans">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar