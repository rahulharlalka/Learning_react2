import React from "react";
import MovieItem from "./movieItem.jsx";
import TableHeader from "./common/TableHeader.jsx";

function MovieTable(props) {
  const { movies, sortColumn, onDelete, onLike, onSort } = props;

  const columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: "like" },
    { key: "delete" },
  ];

  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />

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
