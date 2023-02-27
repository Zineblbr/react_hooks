import { useState } from "react";
import { ImCancelCircle } from "react-icons/im";

function AddNewMovie(props) {
  const [movie, setMovie] = useState({
    title: "",
    category: "",
    rating: 0,
    posterURL: "",
  });

  const [showForm, setShowForm] = useState(false);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setMovie({ ...movie, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onAddMovie(movie);
    setMovie({ title: "", category: "", rating: 0, posterURL: "" });
    setShowForm(false);
  }

  return (
    <>
      {showForm ? (
        <div className="form-container">
          <div className="form-box">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="title-input">Title:</label>
                <input
                  id="title-input"
                  name="title"
                  type="text"
                  value={movie.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="category-input">category:</label>
                <input
                  id="category-input"
                  name="category"
                  type="text"
                  value={movie.category}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="rating-input">Rating:</label>
                <input
                  id="rating-input"
                  name="rating"
                  type="number"
                  value={movie.rating}
                  min="0"
                  max="10"
                  step="0.1"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="image-input">Image URL:</label>
                <input
                  id="image-input"
                  name="posterURL"
                  type="text"
                  value={movie.posterURL}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button
                className="submit-btn"
                type="submit"
                onClick={handleSubmit}
              >
                Add Movie
              </button>
              <button
                className="cancel-btn"
                type="button"
                onClick={() => setShowForm(false)}
                style={{ border: "none", background: "none", padding: 0 }}
              >
                <ImCancelCircle />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button
          className="add-btn"
          type="submit"
          onClick={() => setShowForm(true)}
        >
          Add New Movie
        </button>
      )}
    </>
  );
}

export default AddNewMovie;
