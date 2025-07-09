import { useContext } from "react";
import { NewsContext } from "../context/NewsContext";

const NewsList = () => {
  const { news } = useContext(NewsContext);
  return (
    <section className="list-news">
      <h2>Lista de Noticias</h2>
      {news.length === 0 ? (
        <p>No hay noticias aún.</p>
      ) : (
        <ul>
          {news.map((n, index) => (
            <li key={index}>
              <h3>{n.title}</h3>
              <p>{n.content}</p>
              <small>{n.date}</small>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default NewsList;
