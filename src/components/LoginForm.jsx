import React, { useState } from "react";
import Input from "./common/Input.jsx";

function LoginForm() {
  const [account, setAccount] = useState({ username: "", password: "" });

  function handleSubmit(e) {
    e.preventDefault();

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
        />
        <Input
          name="password"
          label="Password"
          value={account.password}
          onChange={handleChange}
        />
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
