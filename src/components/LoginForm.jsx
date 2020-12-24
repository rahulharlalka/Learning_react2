import React, { useState } from "react";
import Input from "./common/Input.jsx";
import Joi from "joi-browser";

function LoginForm() {
  const [account, setAccount] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  function validate() {
    const result = Joi.validate(account, schema, { abortEarly: false });
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

    const newAccount = { ...account };
    newAccount[e.currentTarget.name] = e.currentTarget.value;
    setAccount(newAccount);
    setErrors(newError);
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="username"
          label="Username"
          value={account.username}
          onChange={handleChange}
          error={errors.username}
        />
        <Input
          name="password"
          label="Password"
          value={account.password}
          onChange={handleChange}
          error={errors.password}
        />

        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
