import React, { useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate.js";
import ListGroup from "./common/ListGroup.jsx";
import { getGenres } from "../services/fakeGenreService";
import MovieTable from "./movieTable.jsx";
import _ from "lodash";

function Movies() {
  const [allMovies, setMovies] = useState(getMovies());
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [genres, setGenres] = useState([
    { _id: "", name: "AllGenres" },
    ...getGenres(),
  ]);
  const [selectedGenre, setCurrentGenre] = useState("");
  const [sortColumn, setSortColumn] = useState({ path: "title", order: "asc" });

  function handleDelete(movie) {
    const newMovies = allMovies.filter((m) => m._id !== movie._id);
    setMovies(newMovies);
  }

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  function handleLike(movie) {
    const newMovies = [...allMovies];
    const index = newMovies.indexOf(movie);
    newMovies[index] = { ...newMovies[index] };
    newMovies[index].liked = !newMovies[index].liked;
    setMovies(newMovies);
  }

  function handleGenreSelect(genre) {
    setCurrentGenre(genre);
    setCurrentPage(1);
  }

  function handleSort(newSortColumn) {
    setSortColumn(newSortColumn);
  }

  const filtered =
    selectedGenre && selectedGenre._id
      ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
      : allMovies;

  const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

  const movies = paginate(sorted, currentPage, pageSize);

  if (movies.length === 0)
    return <h1 className="m-2">There are no movies in the database</h1>;

  return (
    <div className="row">
      <div className="col-3">
        <ListGroup
          items={genres}
          selectedItem={selectedGenre}
          onItemSelect={handleGenreSelect}
        />
      </div>
      <div className="col">
        <div>
          <h2 className="m-3">
            There are {filtered.length} movies in the database
          </h2>
        </div>
        <MovieTable
          movies={movies}
          sortColumn={sortColumn}
          onDelete={handleDelete}
          onLike={handleLike}
          onSort={handleSort}
        />
        <Pagination
          itemsCount={filtered.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Movies;
