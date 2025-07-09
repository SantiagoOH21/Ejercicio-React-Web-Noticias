# 📰 News App - Proyecto con React + News API

Una aplicación web desarrollada con **React**, que permite al usuario consultar noticias reales desde la **News API del New York Times**, además de crear y gestionar sus propias noticias locales utilizando **React Router**, **Context API**, y **SASS** para el estilo.

---

## ✨ Características

✅ Consulta de noticias reales desde el NY Times  
✅ Creación de noticias personalizadas mediante formulario  
✅ Persistencia local (LocalStorage)  
✅ Navegación fluida con **React Router**  
✅ Estilos escalables con **SASS**  
✅ **Responsive Design** para móviles y tablets  
✅ Implementación de **Context API** para manejo global del estado

---

## 🧩 Estructura del Proyecto

```
📁 src
├── 📂 components
│ ├── Footer.jsx
│ └── Header.jsx
│
├── 📂 context
│ └── NewsContext.jsx
│
├── 📂 styles
│ ├── _footer.scss
│ ├── _form.scss
│ ├── _header.scss
│ ├── _home.scss
│ ├── _list.scss
│ ├── _news.scss
│ ├── _variables.scss
│ └── main.scss
│
├── 📂 views
│ ├── ApiNews.jsx
│ ├── Form.jsx
│ ├── Home.jsx
│ └── NewsList.jsx
│
├── App.jsx
└── main.jsx
```

---

## 🧠 Tecnologías Utilizadas

- ⚛️ **React** (v18+)
- 🌐 **React Router DOM**
- 🎯 **Context API**
- 💅 **SASS/SCSS**
- 📦 **LocalStorage API**
- 📲 **Responsive Web Design**
- 📰 **New York Times API**
- 🌱 **Dotenv**

---

---

## 🚀 Rutas principales

| Ruta        | Componente | Descripción                                  |
| ----------- | ---------- | -------------------------------------------- |
| `/`         | `Home`     | Página principal con bienvenida y navegación |
| `/api-news` | `ApiNews`  | Noticias reales desde el New York Times API  |
| `/form`     | `Form`     | Formulario para crear una nueva noticia      |
| `/list`     | `NewsList` | Lista de noticias creadas localmente         |

---

---

## 📝 ¿Cómo funciona?

### 🔧 Crear noticias

1. Rellenas el formulario en `/form`
2. La noticia se guarda automáticamente en **LocalStorage**
3. Redirecciona automáticamente a `/list`
4. Se renderizan las noticias en `NewsList` desde el **Contexto Global**

---

### 📰 Noticias desde el NY Times (opcional)

Se hace una consulta a la API del NYT desde `/api-news`, se renderizan titulares, resumen, imagen y enlace externo.

> Asegúrate de tener tu clave de API en un archivo `.env`:

```env
VITE_API_KEY=tu_clave_de_api
```

## 💻 Instalación y uso

1. Clona el repositorio:

```bash
git clone https://github.com/SantiagoOH21/Ejercicio-React-Web-Noticias
cd news-app
```

2. Instala las dependencias:

```bash
npm install
```

3. Agrega tu archivo .env:

```env
VITE_API_KEY=tu_clave_de_api
```

4. Inicia el proyecto en desarrollo:

```bash
npm run dev
```

## 📱 Responsive

Este proyecto está optimizado para:

- ✅ Teléfonos móviles
- ✅ Tablets
- ✅ Escritorio

Con uso de media queries y flexbox para una experiencia óptima en todos los dispositivos.

---

## 🧑‍💻 Autor

- Santiago Orozco Hernández [@SantiagoOH21](https://github.com/SantiagoOH21)
