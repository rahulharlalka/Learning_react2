import React from "react";
import movies from "../services/fakeMovieService";

function MovieTable() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Genre</th>
          <th>Title</th>
          <th>Stock</th>
          <th>Rate</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie, key) => (
          <tr key={key}>
            <th>{movie.title}</th>
            <td>{movie.genre}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <button className="btn btn-warning">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MovieTable;
