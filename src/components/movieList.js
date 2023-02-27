import MovieCard from "./movieCard";
import MovieData from "./movieData";

function MovieList({ titleFilter, ratingFilter, movies }) {
  return (
    <div className="movie_col">
      {movies
        .filter((movie) => {
          return titleFilter.toLowerCase() === ""
            ? movie
            : movie.title.toLowerCase().includes(titleFilter);
        })
        .filter((movie) => {
          return ratingFilter === 0 ? movie : movie.rating >= ratingFilter;
        })
        .map((movie) => (
          <MovieCard
            key={movie.id}
            posterURL={movie.posterURL}
            title={movie.title}
            category={movie.category}
            rating={movie.rating}
          />
        ))}
    </div>
  );
}

export default MovieList;
