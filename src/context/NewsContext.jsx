import { createContext, useState, useEffect } from "react";
export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState(() => {
    const stored = localStorage.getItem("news");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("news", JSON.stringify(news));
  }, [news]);

  const addNews = (newItem) => {
    setNews([...news, newItem]);
  };

  return (
    <NewsContext.Provider value={{ news, addNews }}>
      {children}
    </NewsContext.Provider>
  );
};
