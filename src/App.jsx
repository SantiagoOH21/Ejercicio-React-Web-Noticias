import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Form from "./views/Form";
import NewsList from "./views/NewsList";
import { NewsProvider } from "./context/NewsContext";
import ApiNews from "./views/ApiNews";

import "./App.css";

function App() {
  return (
    <>
      <NewsProvider>
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/api-news" element={<ApiNews />} />
              <Route path="/form" element={<Form />} />
              <Route path="/list" element={<NewsList />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </NewsProvider>
    </>
  );
}

export default App;
