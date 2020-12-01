import React, { useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import MovieItem from "./movieItem.jsx";

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
      <tbody>
        {movies.map((movie, index) => (
          <MovieItem key={index} moviename={movie} />
        ))}
      </tbody>
    </table>
  );
}

export default MovieTable;
