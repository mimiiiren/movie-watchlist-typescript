
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
    <div className="flex flex-wrap">
      <a
        href={`https://www.themoviedb.org/movie/${id}`}
        target=""
        className="w-3xs h-xs rounded-lg overflow-hidden relative hover:scale-105 ease-out duration-300"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="movie poster"
          className="movie-poster"
        />
        <div className="flex flex-col justify-end absolute top-0 opacity-0 w-full h-full p-2 bg-gradient-to-t from-black to-transparent hover:opacity-100 ease-out duration-300">
          <h3 className="text-yellow-400 font-bold">{title}</h3>
          <div className="flex justify-between items-center ">
            <p className="text-gray-200">{release_date}</p>
            <p className="text-gray-200">{vote_average} ⭐️</p>
          </div>
          {/* slice method will only display up to 100th index letter then add ... */}
          <p className="italic text-gray-200">{overview.slice(0, 100) + "..."}</p>
        </div>
      </a>
    </div>
  );
}
