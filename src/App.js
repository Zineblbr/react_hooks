import React from "react";
import "./App.css";
import MovieData from "./components/movieData";
import AddNewMovie from "./components/addNewMovie";
import Filter from "./components/filter";
import MovieList from "./components/movieList";
import { useState } from "react";

function App() {
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [movies, setMovies] = useState(MovieData);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <header>
        <Filter
          titleFilter={titleFilter}
          setTitleFilter={setTitleFilter}
          ratingFilter={ratingFilter}
          setRatingFilter={setRatingFilter}
        />
        <AddNewMovie onAddMovie={handleAddMovie} />
      </header>
      <main>
        <div className="list_container">
          <MovieList
            titleFilter={titleFilter}
            ratingFilter={ratingFilter}
            movies={movies}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
