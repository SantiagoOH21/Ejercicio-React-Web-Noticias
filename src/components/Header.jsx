import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="main-header">
      <nav className="navbar">
        <Link to="/">Inicio</Link>
        <Link to="/api-news">Noticias API</Link>
        <Link to="/form">Crear Noticia</Link>
        <Link to="/list">Lista</Link>
      </nav>
    </header>
  );
};

export default Header;
