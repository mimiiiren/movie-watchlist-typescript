import FilterGroup from "./FilterGroup";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
interface MovieAPI {
  id: number;
  release_date: string;
  vote_average: number;
  default: string;
  poster_path: string;
  title: string;
  overview: string;
}
interface sortObject {
  by: "default" | "release_date" | "vote_average";
  order: "asc" | "desc";
}
type Props = {
  category: string;
  title: string;
};
export default function MovieList({ category, title }: Props) {
  const [movies, setMovies] = useState<MovieAPI[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<MovieAPI[]>([]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState<sortObject>({
    by: "default",
    order: "desc",
  });

  const getMoviesData = async () => {
    const apiKey = "4841ac98bd4f6f96f0cec65648747e0f";
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}`,
      );
      const data = await response.json();
      setMovies(data.results);
      setFilteredMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  useEffect(() => {
    getMoviesData();
  }, []);

  const handleFilter = (rate: number) => {
    if (rate === minRating) {
      setMinRating(0);
      setFilteredMovies(movies);
    } else {
      setMinRating(rate);
      const filtered = movies.filter((movie) => movie.vote_average >= rate);
      setFilteredMovies(filtered);
    }
  };
  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovies = [...filteredMovies].sort((a, b) => {
        if (sort.by === "release_date") {
          return sort.order === "asc"
            ? new Date(a[sort.by]).getTime() - new Date(b[sort.by]).getTime()
            : new Date(b[sort.by]).getTime() - new Date(a[sort.by]).getTime();
        } else if (sort.by === "vote_average") {
          return sort.order === "asc"
            ? a[sort.by] - b[sort.by]
            : b[sort.by] - a[sort.by];
        }
        return 0;
      });
      setFilteredMovies(sortedMovies);
    }
  }, [sort]);
  return (
    <section className="movieList" id={category}>
      <header className="flex justify-between">
        <h2 className="text-2xl font-bold mb-4 mx-2">{title}</h2>
        <div className="flex gap-3 items-center cursor-pointer">
          {/* React naming conventions: use onEvent pattern for callback props, not handleFilter */}
          <FilterGroup
            minRating={minRating}
            onRatingClick={handleFilter}
            ratings={[6, 7, 8]}
          />
          <select className="bg-white text-black rounded-sm text-sm" name="by" onChange={handleSort} value={sort.by}>
            <option value="default">Sort By</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select className="bg-white text-black rounded-sm mr-2 text-sm" name="order" onChange={handleSort} value={sort.order}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>
      <div className="flex flex-wrap justify-evenly mx-3 gap-y-3">
        {filteredMovies.map((item) => (
          <MovieCard movie={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
