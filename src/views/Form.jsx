import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NewsContext } from "../context/NewsContext";

const Form = () => {
  const { addNews } = useContext(NewsContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.title && form.content) {
      addNews({ ...form, date: new Date().toLocaleString() });
      navigate("/list");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="news-form">
      <h2>Crear Noticia</h2>
      <input
        type="text"
        name="title"
        placeholder="Título"
        onChange={handleChange}
        required
      />
      <textarea
        name="content"
        placeholder="Contenido"
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default Form;
