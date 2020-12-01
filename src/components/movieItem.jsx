import React from "react";
import Like from "./common/Like.jsx";

function MovieItem(props) {
  return (
    <tr key={props.movie._id}>
      <th>{props.title}</th>
      <td>{props.genre.name}</td>
      <td>{props.numberInStock}</td>
      <td>{props.dailyRentalRate}</td>
      <td>
        <Like
          key={props.movie._id}
          liked={props.movie.liked}
          onClick={props.handleLike}
          movie={props.movie}
        />
      </td>
      <td>
        <button
          onClick={() => props.handleDelete(props.movie)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default MovieItem;
