import MovieData from "./movieData";

function MovieCard({ posterURL, title, category, rating }) {
  return (
    <a href="#" className="card">
      <img src={posterURL} alt={title} />
      <div className="card_body">
        <h1>{title}</h1>
        <button className="rating-btn">{rating}</button>
      </div>
      <div className="card-desc">
        <p>{category}</p>
      </div>
    </a>
  );
}

export default MovieCard;
