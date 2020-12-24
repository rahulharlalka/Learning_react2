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

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    console.log(newErrors);
    setErrors(newErrors || {});
    if (newErrors) return;

    console.log("submitted");
  }

  function handleChange(e) {
    const newAccount = { ...account };
    newAccount[e.currentTarget.name] = e.currentTarget.value;
    setAccount(newAccount);
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
