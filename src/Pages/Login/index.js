import axiosInstance from "../../axios";
import UserContext from "../../store/UserContext";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Button, TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import React, { useState, useContext } from "react";
import classes from "./Login.module.scss";
import { teal } from "@mui/material/colors";

// const initialFormData = {
//   email: "",
//   password: "",
// };

function Login(props) {
  const login = useContext(UserContext);
  const navigate = useNavigate();

  const [formData, updateFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    // send `pass` and `username` to backend
    axiosInstance
      .post(`accounts/api/token`, {
        username: formData.username,
        password: formData.password,
      })
      .then((res) => {
        if (res.status === 200) {
          login(res.data.type, res.data.username);
          localStorage.setItem("access_token", res.data.access);
          localStorage.setItem("refresh_token", res.data.refresh);
          axiosInstance.defaults.headers["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");
          navigate("/panel");
        }
      });
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.container__box}>
          <form onSubmit={handleSumbit} className={classes.container__form}>
            <div className={classes.container__form__avatar}>
              <Avatar
                sx={{ m: 1, bgcolor: teal[500] }}
                className={classes.container__form_Avatar}
              ></Avatar>

              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
            </div>
            <TextField
              value={formData.username}
              onChange={handleChange}
              type="text"
              id="username"
              label="Username"
              variant="outlined"
              name="username"
              sx={{ mt: 2 }}
              // sx={{ fontSize: 18 }}
            />

            <TextField
              value={formData.password}
              onChange={handleChange}
              label="Password"
              variant="outlined"
              id="password"
              name="password"
              sx={{ mt: 2, mb: 1 }}
            />

            <div className={classes.container__form__btndiv}>
              <Button
                className="container__form__submitbtn"
                type="submit"
                variant="outlined"
                sx={{ mt: 5, mb: 3 }}
                onClick={handleSumbit}
              >
                Log In
              </Button>
            </div>
          </form>

          <Link to="/register" className={classes.link}>
            <Button
              // onClick={() => props.onFormSwitch("register")}
              variant="text"
            >
              Don't have an accout? Register here
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
