import "./App.css";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";

import { useState } from 'react';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  return (
    <div className={darkMode ? "darkMode" : ""}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <MovieList category="popular" title="Popular" />
      <MovieList category="top_rated" title="Top Rated" />
      <MovieList category="upcoming" title="Upcoming" />

    </div>
  );
}

export default App;