import { useEffect, useState } from "react";

const ApiNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `/api/svc/archive/v1/2024/12.json?api-key=${API_KEY}`
        );

        const data = await response.json();
        setArticles(data.response.docs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news", error);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Cargando noticias...</p>;

  return (
    <section className="news-section">
      <h2>Noticias Reales (desde NewsAPI)</h2>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            {article.multimedia.length > 0 && (
              <img
                src={`https://www.nytimes.com/${article.multimedia[0].url}`}
                alt={article.headline.main}
              />
            )}
            <div className="content">
              <h3>{article.headline.main}</h3>
              <p>{article.abstract}</p>

              <a
                href={article.web_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Leer más
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ApiNews;
