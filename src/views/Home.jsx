import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <div className="overlay">
        <div className="home-content">
          <h1>Bienvenido a la News App</h1>
          <p>
            Descubre, crea y explora las noticias más relevantes del momento,
            incluyendo lo mejor del New York Times.
          </p>
          <div className="button-group">
            <Link to="/api-news" className="btn-explore">
              Noticias NY Times
            </Link>
            <Link to="/form" className="btn-explore">
              Crear Noticia
            </Link>
            <Link to="/list" className="btn-explore">
              Ver Noticias Creadas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
