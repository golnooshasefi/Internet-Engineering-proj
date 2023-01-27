import {
  TextField,
  Typography,
  Avatar,
  Button,
  InputAdornment,
  IconButton,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  Toolbar,
} from "@mui/material";

import FormControl from "@mui/material/FormControl";

import classes from "./CreateEmail.module.scss";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import axiosInstance from "../../../axios";

function CreateEmail() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [formData, updateFormData] = useState({
    username: "",
    password: "",
    confpassword: "",
  });
  const [correctPass, setCorrectPass] = useState(true);
  const [createSuccessfull, setCreateSuccessfull] = useState(false);
  const [createError, setCreateError] = useState(false);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    setCreateSuccessfull(false);
    setCreateError(false);
    setCorrectPass(true);
    console.log(formData.password, formData.confpassword);
    console.log("before check " + correctPass);
    if (formData.password === formData.confpassword) {
      setCorrectPass(true);
      console.log("after" + correctPass);
      axiosInstance
        .post(`accounts/mail/addUser`, {
          username: formData.username,
          password: formData.password,
        })
        .then((res) => {
          if (res.status === 200) {
            setCreateSuccessfull(true);
          }
        })
        .catch((error) => {
          setCreateError(true);
        });
    } else {
      setCorrectPass(false);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.container__box}>
        <form
          //   onSubmit={handleSumbit}
          className={classes.container__form}
        >
          <Toolbar>
            <Typography component="h1" variant="h5">
              Create your email account
            </Typography>
          </Toolbar>
          <FormControl sx={{ m: 1 }} variant="outlined">
            <InputLabel htmlFor="name">Name</InputLabel>
            <OutlinedInput
              label="Name"
              id="name"
              value={formData.username}
              name="username"
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">@UIIE.LOC</InputAdornment>
              }
              aria-describedby="address-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
            <FormHelperText id="outlined-weight-helper-text">
              Your email address!
            </FormHelperText>
          </FormControl>

          <FormControl sx={{ m: 1 }} variant="outlined">
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
              sx={{ mb: 3 }}
            />
          </FormControl>

          <FormControl sx={{ m: 1 }} variant="outlined">
            <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
            <OutlinedInput
              id="confirmPassword"
              type={showPassword ? "text" : "password"}
              name="confpassword"
              value={formData.confpassword}
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
              label="Confirm Password"
              sx={{ mb: 3 }}
            />
          </FormControl>
          <div className={classes.container__form__btndiv}>
            <Button
              className="container__form__submitbtn"
              type="submit"
              variant="outlined"
              sx={{ mt: 3, mb: 2, pt: 1, pb: 1, pl: 3, pr: 3 }}
              onClick={handleSumbit}
            >
              Submit
            </Button>
          </div>
        </form>
        {!correctPass && (
          <div className={classes.errorcontainer}>
            <div className={classes.errorcontainer__message}>
              Confirm password doesn't match with password.
            </div>
          </div>
        )}
        {createSuccessfull && (
          <div className={classes.messagecontainer}>
            <div className={classes.messagecontainer__success}>
              Your email account created succesfully!
            </div>
          </div>
        )}
        {createError && (
          <div className={classes.errorcontainer}>
            <div className={classes.errorcontainer__message}>
              An error occured. Please try again.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateEmail;
