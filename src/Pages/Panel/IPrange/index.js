import { TextField, Toolbar, Typography } from "@mui/material";

import classes from "./Iprange.module.scss";

import axiosInstance from "../../../axios";
import { useState } from "react";
function Iprange() {
  // const [startip, setStartip] = useState("");
  // const [endip, setEndip] = useState("");
  // const [emptyStartIp, setEmptyStartIp] = useState(false);
  // const [emptyEndIp, setEmptyEndIp] = useState(false);
  const [response, setResponse] = useState(false);
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
    setResponse(false);
    e.preventDefault();
    axiosInstance
      .post(`/dhcp/changeIpRange/`, {
        startip: formData.startip,
        endip: formData.endip,
      })
      .then((res) => {
        if(res.status === 200){
          setResponse(res.change_range);
        }
      })
      .catch((err) => {
        if(err.response) {
          setResponse(err.response.data);
        }
        else if(err.request) {
          setResponse(err.request);
        }
        else {
          setResponse("An error occurred.");
        }
      }

      );
  };

  return (
    <div className={classes.container}>
      <div className={classes.container__header}>
        <Typography variant="h4" noWrap component="div">
          IP Range
        </Typography>
      </div>

      <span className={classes.title}>You can change your IP range here</span>
      <div className={classes.iprange}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div>
            <span className={classes.start}>
              from 192.168.100.
              <TextField
                sx={{
                  width: { sm: 60 },
                  "& .MuiInputBase-root": {
                    height: 25,
                  },
                }}
                value={formData.startip}
                name="startip"
                id="outlined-basic"
                variant="outlined"
                onChange={handleChange}
                type="text"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}  
              />
            </span>
            <span>
              to 192.168.100.
              <TextField
                sx={{
                  width: { sm: 60 },
                  "& .MuiInputBase-root": {
                    height: 25,
                  },
                }}
                value={formData.endip}
                name="endip"
                id="outlined-basic"
                variant="outlined"
                onChange={handleChange}
                type="text"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </span>
            <div className={classes.status}>{response && <span>Your mail status is: </span>}{response}</div>
          </div>
          <input type="submit" value="Submit" className={classes.submitbtn} />
        </form>
      </div>
    </div>
  );
}

export default Iprange;
