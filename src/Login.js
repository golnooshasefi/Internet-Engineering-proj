import { TextField } from "@mui/material";
import React, { useState } from "react";
import axiosInstance from "./axios";

function Login(props) {
  //   const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [username, setUsername] = useState("");

  const initialFormData = Object.freeze({
    username: "",
    password: "",
  });
  const [formData, updateFormData] = useState(initialFormData);

  const handleSumbit = (e) => {
    e.preventDefault();
    
    axiosInstance.post('/' , {
      username: formData.username,
      password: formData.password,
    }).then((res) => {
        console.log(res);
        console.log(res.data);
    });
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
      <button onClick={() => props.onFormSwitch("register")}>
        Don't have an accout? Register here{" "}
      </button>
    </>
  );
}

export default Login;
