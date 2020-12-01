import React from "react";
import { getMovies } from "../services/fakeMovieService";

function Movies() {
  let number = getMovies().length;
  return <h5>There are {number} movies in the database</h5>;
}

export default Movies;
