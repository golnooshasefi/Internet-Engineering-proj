import { TextField, Typography, Avatar, Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { purple, teal } from "@mui/material/colors";

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axiosInstance from "../../axios";
import classes from "./Register.module.scss";
import UserContext from "../../store/UserContext";

function Register(props) {
  const navigate = useNavigate();
  const initialFormData = {
    username: "",
    email: "",
    type: "",
    password: "",
  };
  const [formData, updateFormData] = useState(initialFormData);

  const login = useContext(UserContext);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleBtnChange = (e) => {
    updateFormData({
      ...formData,
      type: e.target.value,
    });
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    axiosInstance
      .post(`accounts/register/`, {
        username: formData.fullName,
        email: formData.email,
        type: formData.phoneNumber,
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
                Sign Up
              </Typography>
            </div>
            <TextField
              value={formData.email}
              onChange={handleChange}
              type="email"
              label="Email"
              id="email"
              name="email"
              variant="outlined"
              sx={{
                mb: 2,
                mt: 2,
                "MuiInputBase-root": {
                  color: teal[600],
                },
              }}
            />

            <TextField
              value={formData.username}
              onChange={handleChange}
              type="text"
              id="username"
              label="Username"
              name="username"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              type="password"
              value={formData.password}
              onChange={handleChange}
              id="password"
              name="password"
              variant="outlined"
              label="Password"
              sx={{ mb: 2 }}
            />
            <FormControl>
              <FormLabel id="user-type">Select your type</FormLabel>
              <RadioGroup
                row
                aria-labelledby="user-type"
                defaultValue="DHCP"
                name="radio-buttons-group"
                value={formData.type}
                onChange={handleBtnChange}
              >
                <FormControlLabel
                  value="DHCP"
                  name="type"
                  control={
                    <Radio
                      sx={{
                        color: teal[500],
                        "&.Mui-checked": {
                          color: teal[500],
                        },
                      }}
                    />
                  }
                  label="DHCP"
                />
                <FormControlLabel
                  value="Mail"
                  name="type"
                  control={
                    <Radio
                      sx={{
                        color: teal[500],
                        "&.Mui-checked": {
                          color: teal[500],
                        },
                      }}
                    />
                  }
                  label="Mail "
                />
                <FormControlLabel
                  value="Web"
                  name="type"
                  control={
                    <Radio
                      sx={{
                        color: teal[500],
                        "&.Mui-checked": {
                          color: teal[500],
                        },
                      }}
                    />
                  }
                  label="Web"
                />
              </RadioGroup>
            </FormControl>
            <div className={classes.container__form__btndiv}>
              <Button
                className="container__form__submitbtn"
                type="submit"
                variant="outlined"
                sx={{ mt: 5, mb: 3 }}
                onClick={handleSumbit}
              >
                Sign Up
              </Button>
            </div>
          </form>
          <Link to="/login" className={classes.link}>
            <Button onClick={() => props.onFormSwitch("login")} variant="text">
              Already have an accout? Login here
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Register;
