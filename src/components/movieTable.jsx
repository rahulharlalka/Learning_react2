import React, { useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import MovieItem from "./movieItem.jsx";
import Pagination from "./common/pagination";

function MovieTable() {
  const [movies, setMovies] = useState(getMovies());
  const [pageSize, setPageSize] = useState(4);

  function handleDelete(movie) {
    const newMovies = movies.filter((m) => m._id !== movie._id);
    setMovies(newMovies);
  }

  function handlePageChange(page) {
    console.log(page);
  }

  function handleLike(movie) {
    const newMovies = [...movies];
    const index = newMovies.indexOf(movie);
    newMovies[index] = { ...newMovies[index] };
    newMovies[index].liked = !newMovies[index].liked;
    setMovies(newMovies);
  }

  if (movies.length === 0)
    return <h1 className="m-2">There are no movies in the database</h1>;

  return (
    <React.Fragment>
      <div>
        <h2 className="m-3">
          There are {movies.length} movies in the database
        </h2>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => {
            return (
              <MovieItem
                movie={movie}
                title={movie.title}
                genre={movie.genre}
                numberInStock={movie.numberInStock}
                dailyRentalRate={movie.dailyRentalRate}
                handleDelete={handleDelete}
                handleLike={handleLike}
              />
            );
          })}
        </tbody>
      </table>
      <Pagination
        itemsCount={movies.length}
        pageSize={pageSize}
        onPageChnage={handlePageChange}
      />
    </React.Fragment>
  );
}

export default MovieTable;
