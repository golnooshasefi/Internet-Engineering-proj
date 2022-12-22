import React, { useState } from "react";
import axiosInstance from "../../axios";

function Register(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [username, setUsername] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    // send `pass` and `username` to backend
    axiosInstance
      .post("/", {
        email: email,
        username: username,
        password: pass,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  return (
    <>
      <form onSubmit={handleSumbit}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@example.com"
          id="email"
          name="email"
        />

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
      <button onClick={() => props.onFormSwitch("login")}>
        Already have an accout? Login here
      </button>
    </>
  );
}

export default Register;
