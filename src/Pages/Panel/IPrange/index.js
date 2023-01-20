import { Divider, TextField, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import classes from "./Iprange.module.scss";

import axiosInstance from "../../../axios";
import { useState } from "react";
function Iprange() {
  // const [startip, setStartip] = useState("");
  // const [endip, setEndip] = useState("");
  const [success, setSuccess] = useState(false);
  const [formData, updateFormData] = useState({
    startip: "",
    endip: "",
  });

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    setSuccess(false);
    e.preventDefault();
    axiosInstance
      .post("", {
        startip: formData.startip,
        endip: formData.endip,
      })
      .then(() => {
        setSuccess(true);
      });
  };

  return (
    <div className={classes.container}>
      <span className={classes.container__header}>Change IP Range</span>
      <span>You can change your IP range here</span>
      <div className={classes.iprange}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div>
            <span className={classes.start}>
              from 192.168.100.
              <TextField
                sx={{
                  width: { sm: 50 },
                  "& .MuiInputBase-root": {
                    height: 40,
                  },
                }}
                value={formData.startip}
                name="startip"
                id="outlined-basic"
                variant="outlined"
                onChange={handleChange}
                type="text"
              />
            </span>
            <span>
              to 192.168.100.
              <TextField
                sx={{
                  width: { sm: 50 },
                  "& .MuiInputBase-root": {
                    height: 40,
                  },
                }}
                value={formData.endip}
                name="endip"
                id="outlined-basic"
                variant="outlined"
                onChange={handleChange}
                type="text"
              />
            </span>
          </div>

          <input type="submit" value="Submit" className={classes.submitbtn} />
        </form>
        {success && <div> Suucessfuly Changed!</div>}
      </div>
    </div>
  );
}

export default Iprange;
