import axiosInstance from "../../axios";
import { Button, TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import React, { useState } from "react";
import classes from "./Login.module.scss";

function Login(props) {
  //   const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [username, setUsername] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    // send `pass` and `username` to backend
    axiosInstance
      .post("/", {
        username,
        password: pass,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.container__box}>
          <form onSubmit={handleSumbit} className={classes.container__form}>
            <div className={classes.container__form__avatar}>
              <Avatar
                sx={{ m: 1, bgcolor: "secondary.main" }}
                className={classes.container__form_Avatar}
              ></Avatar>

              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
            </div>
            <TextField
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="username"
              label="Username"
              variant="outlined"
              name="username"
              sx={{ mt: 2 }}
            />
            {/* <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          id="username"
          name="username"
        /> */}

            <TextField
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              label="Password"
              variant="outlined"
              id="password"
              name="password"
              sx={{ mt: 2, mb: 1 }}
            />

            {/* <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="*******"
          id="password"
          name="password"
        /> */}
            {/* <button type="submit">Login</button> */}
            <div className={classes.container__form__btndiv}>
              <Button
                className="container__form__submitbtn"
                type="submit"
                variant="outlined"
                sx={{ mt: 5, mb: 3 }}
              >
                Log In
              </Button>
            </div>
          </form>
          {/* <button onClick={() => props.onFormSwitch("register")}>
            Don't have an accout? Register here{" "}
          </button> */}
          <Button onClick={() => props.onFormSwitch("register")} variant="text">
            Don't have an accout? Register here
          </Button>
        </div>
      </div>
    </>
  );
}

export default Login;
