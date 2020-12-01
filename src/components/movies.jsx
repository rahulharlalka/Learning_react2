import React from "react";
import movies from "../services/fakeMovieService";

function Movies() {
  let number = movies.length;
  return <h5>There are {number} movies in the database</h5>;
}

export default Movies;
