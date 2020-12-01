import React from "react";

function MovieItem(props) {
  return (
    <tr>
      <th>{props.moviename.title}</th>
      <td>{props.moviename.genre}</td>
      <td>{props.moviename.numberInStock}</td>
      <td>{props.moviename.dailyRentalRate}</td>
      <td>
        <button className="btn btn-warning">Delete</button>
      </td>
    </tr>
  );
}

export default MovieItem;
