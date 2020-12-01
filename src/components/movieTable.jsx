import React, { useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import MovieItem from "./movieItem.jsx";

function createMovie(movie) {
  return (
    <MovieItem
      title={movie.title}
      genre={movie.genre}
      numberInStock={movie.numberInStock}
      dailyRentalRate={movie.dailyRentalRate}
    />
  );
}

function MovieTable() {
  const [movies, setMovies] = useState(getMovies());

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{movies.map(createMovie)}</tbody>
    </table>
  );
}

export default MovieTable;
