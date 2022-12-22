import React, { useState } from "react";

function Login() {
  //   const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [username, setUsername] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <>
      <form onSubmit={handleSumbit}>
        <label htmlFor="text">username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          id="username"
          name="username"
        />

        <label htmlFor="password">password</label>
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="*******"
          id="password"
          name="password"
        />
        <button type="submit">Login</button>
      </form>
      <button>Don't have an accout? Register here </button>
    </>
  );
}

export default Login;
