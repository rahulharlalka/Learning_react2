import React, { useEffect, useState } from "react";
import Joi from "joi-browser";
import { getMovies, saveMovie } from "./../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Input from "./common/Input";
import Select from "./common/Select";

const MovieForm = (props) => {
  const [data, setData] = useState({
    title: "",
    genreId: "",
    numberInStock: "",
    dailyRentalRate: "",
  });

  const [genres, setGenres] = useState([]);
  const [errors, setErrors] = useState({});

  const schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number In Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate"),
  };

  useEffect(() => {
    const newGenres = getGenres();
    setGenres(newGenres);

    const movieId = props.match.params.id;
    if (movieId === "new") return;

    const movie = getMovies(movieId);
    if (!movie) return props.history.replace("/not-found");

    setData(mapToViewModel(movie));
  });

  function mapToViewModel(movie) {
    return {
      _id: movie.movieId,
      title: movie.title,
      genreId: movie.genreId,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  function validate() {
    const result = Joi.validate(data, schema, { abortEarly: false });
    if (!result.error) return null;
    const newErrors = {};
    for (let item of result.error.details)
      newErrors[item.path[0]] = item.message;
    return newErrors;
  }

  function validateProperty({ name, value }) {
    const obj = { [name]: value };
    const newSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, newSchema);
    return error ? error.details[0].message : null;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();

    setErrors(newErrors || {});
    if (newErrors) return;

    doSubmit();
  }

  function doSubmit() {
    saveMovie(data);
    props.history.push("/movies");
  }

  function handleChange(e) {
    const newError = { ...errors };
    const errorMsg = validateProperty(e.currentTarget);
    if (errorMsg) newError[e.currentTarget.name] = errorMsg;
    else delete newError[e.currentTarget.name];

    const newAccount = { ...data };
    newAccount[e.currentTarget.name] = e.currentTarget.value;
    setData(newAccount);
    setErrors(newError);
  }

  return (
    <div>
      <h1>MovieForm</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="title"
          label="Title"
          value={data.title}
          onChange={handleChange}
          error={errors.title}
        />
        <Select
          name="genre"
          label="Genre"
          genres={genres}
          error={errors.genreId}
        />
        <Input
          name="numberInStock"
          label="Number In Stock"
          value={data.numberInStock}
          onChange={handleChange}
          error={errors.numberInStock}
        />
        <Input
          name="dailyRentalRate"
          label="Rate"
          value={data.dailyRentalRate}
          onChange={handleChange}
          error={errors.dailyRentalRate}
        />
        <button
          className="btn btn-primary"
          onClick={() => props.history.push("/movies")}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default MovieForm;
