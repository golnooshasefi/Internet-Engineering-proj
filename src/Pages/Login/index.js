import axiosInstance from "../../axios";
import { UserContext } from "../../store/UserContext";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import FormControl from "@mui/material/FormControl";
import {
  Button,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import React, { useState, useContext } from "react";
import classes from "./Login.module.scss";
import { teal } from "@mui/material/colors";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function Login(props) {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const context = useContext(UserContext);
  const { login } = context;
  const navigate = useNavigate();

  const [formData, updateFormData] = useState({
    username: "",
    password: "",
  });

  const [hasLoginError, setHasLoginError] = useState(false);

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
      .post(`accounts/login/`, {
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
      })
      .catch((error) => {
        if (error.status === 401) {
          setHasLoginError(true);
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
              sx={{ mt: 2, mb: 3 }}
            />

            <FormControl variant="outlined">
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>

            {/* <TextField
              value={formData.password}
              onChange={handleChange}
              label="Password"
              type="password"
              variant="outlined"
              id="password"
              name="password"
              sx={{ mt: 2, mb: 1 }}
            /> */}

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
          {hasLoginError && (
            <div className={classes.errorcontainer}>
              <div className={classes.errorcontainer__message}>
                Login failed. Your username or password are incorrect.
              </div>
            </div>
          )}
          <Link to="/register" className={classes.link}>
            <Button variant="text" className={classes.link__button}>
              Don't have an accout? Register here
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
