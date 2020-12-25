import React, { useState } from "react";
import Input from "./common/Input.jsx";
import Joi from "joi-browser";

function RegisterForm() {
  const [data, setData] = useState({
    username: "",
    password: "",
    name: "",
  });
  const [errors, setErrors] = useState({});

  const schema = {
    username: Joi.string().email().required().label("Username"),
    password: Joi.string().min(8).required().label("Password"),
    name: Joi.string().required().label("Name"),
  };

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
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="username"
          label="Username"
          value={data.username}
          onChange={handleChange}
          error={errors.username}
        />
        <Input
          name="password"
          label="Password"
          value={data.password}
          onChange={handleChange}
          error={errors.password}
        />

        <Input
          name="name"
          label="Name"
          value={data.name}
          onChange={handleChange}
          error={errors.name}
        />

        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;
