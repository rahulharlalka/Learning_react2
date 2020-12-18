import React from "react";
import MovieItem from "./movieItem.jsx";

function MovieTable(props) {
  const { movies, onDelete, onLike, onSort } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort("title")}>Title</th>
          <th onClick={() => onSort("genre.name")}>Genre</th>
          <th onClick={() => onSort("numberInStock")}>Stock</th>
          <th onClick={() => onSort("dailyRentalRate")}>Rate</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => {
          return (
            <MovieItem
              movie={movie}
              title={movie.title}
              genre={movie.genre}
              numberInStock={movie.numberInStock}
              dailyRentalRate={movie.dailyRentalRate}
              handleDelete={onDelete}
              handleLike={onLike}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default MovieTable;
