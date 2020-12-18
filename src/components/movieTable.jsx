import React from "react";
import MovieItem from "./movieItem.jsx";

function MovieTable(props) {
  const { movies, sortColumn, onDelete, onLike, onSort } = props;

  function raiseSort(path) {
    const newSortColumn = { ...sortColumn };
    if (sortColumn.path === path)
      newSortColumn.order = newSortColumn.order === "asc" ? "desc" : "asc";
    else {
      newSortColumn.path = path;
      newSortColumn.order = "asc";
    }
    onSort(newSortColumn);
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => raiseSort("title")}>Title</th>
          <th onClick={() => raiseSort("genre.name")}>Genre</th>
          <th onClick={() => raiseSort("numberInStock")}>Stock</th>
          <th onClick={() => raiseSort("dailyRentalRate")}>Rate</th>
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
