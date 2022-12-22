import { TextField, Typography, Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import axiosInstance from "../../axios";
import classes from "./Register.module.scss";
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
      <div className={classes.container}>
        <div className={classes.container__box}>
          <form onSubmit={handleSumbit} className={classes.container__form}>
            <div className={classes.container__form__avatar}>
              <Avatar
                sx={{ m: 1, bgcolor: "secondary.main" }}
                className={classes.container__form_Avatar}
              ></Avatar>

              <Typography component="h1" variant="h5">
                Sign Up
              </Typography>
            </div>
            {/* <label htmlFor="email">email</label> */}
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              label="Email"
              id="email"
              name="email"
              variant="outlined"
              sx={{ mb: 2, mt: 2 }}
            />

            {/* <label htmlFor="text">username</label> */}
            <TextField
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="username"
              label="Username"
              name="username"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            {/* <label htmlFor="password">password</label> */}
            <TextField
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              id="password"
              name="password"
              variant="outlined"
              label="Password"
              sx={{ mb: 2 }}
            />
            <div className={classes.container__form__btndiv}>
              <Button
                className="container__form__submitbtn"
                type="submit"
                variant="outlined"
                sx={{ mt: 5, mb: 3 }}
              >
                Sign Up
              </Button>
            </div>
          </form>

          <Button onClick={() => props.onFormSwitch("login")} variant="text">
            Already have an accout? Login here
          </Button>
        </div>
      </div>
    </>
  );
}

export default Register;
