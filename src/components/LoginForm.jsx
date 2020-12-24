import React, { useState } from "react";
import Input from "./common/Input.jsx";

function LoginForm() {
  const [account, setAccount] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};

    if (account.username.trim() === "")
      newErrors.username = "username is required";

    if (account.password.trim() === "")
      newErrors.password = "password is required";

    return Object.keys(newErrors).length === 0 ? null : newErrors;
  }

  function validateProperty(input) {
    if (input.name === "username") {
      if (input.value.trim() === "") return "username is required";
    }

    if (input.name === "password") {
      if (input.value.trim() === "") return "password is required";
    }
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
