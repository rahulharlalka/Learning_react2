import React from "react";

function MovieItem(props) {
  console.log(props);
  return (
    <tr>
      <th>{props.title}</th>
      <td>{props.genre.name}</td>
      <td>{props.numberInStock}</td>
      <td>{props.dailyRentalRate}</td>
      <td>
        <button className="btn btn-warning">Delete</button>
      </td>
    </tr>
  );
}

export default MovieItem;
