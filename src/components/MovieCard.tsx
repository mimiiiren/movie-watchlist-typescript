import "./MovieCard.css";

type Props = {
    movie: {
        id: number;
        poster_path: string;
        release_date: string;
        title: string;
        overview: string;
        vote_average: number;
    }
}

export default function MovieCard({ movie }: Props) {
  const { id, poster_path, release_date, title, overview, vote_average } =
    movie;
  return (
    <div className="card-container">
      <a
        href={`https://www.themoviedb.org/movie/${id}`}
        target=""
        className="MovieCard"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="movie poster"
          className="movie-poster"
        />
        <div className="movie-details">
          <h3 className="movie-details-heading">{title}</h3>
          <div className="movie-date-rate">
            <p>{release_date}</p>
            <p>{vote_average} ⭐️</p>
          </div>
          {/* slice method will only display up to 100th index letter then add ... */}
          <p className="movie-description">{overview.slice(0, 100) + "..."}</p>
        </div>
      </a>
    </div>
  );
}
