import React from "react";
import { getMovies } from "../services/fakeMovieService";

function Movies() {
  let number = getMovies().length;
  return <h2 className="m-3">There are {number} movies in the database</h2>;
}

export default Movies;
