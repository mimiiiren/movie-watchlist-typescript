import "./App.css";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="app">
      <Navbar />
      <MovieList category="popular" title="Popular" />
      <MovieList category="top_rated" title="Top Rated" />
      <MovieList category="upcoming" title="Upcoming" />
    </div>
  );
}

export default App;