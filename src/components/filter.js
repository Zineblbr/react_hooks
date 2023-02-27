import React from "react";

function Filter({
  titleFilter,
  ratingFilter,
  setTitleFilter,
  setRatingFilter,
}) {
  return (
    <div className="filter">
      <input
        id="title-input"
        type="text"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
        placeholder="Filter by title"
      />
      <input
        id="rating-input"
        type="number"
        min="0"
        max="10"
        step="0.1"
        value={ratingFilter}
        onChange={(e) => setRatingFilter(parseFloat(e.target.value))}
        placeholder="Filter by rating"
      />
    </div>
  );
}

export default Filter;
