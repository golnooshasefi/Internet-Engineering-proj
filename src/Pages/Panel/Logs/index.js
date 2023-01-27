import { Button, Typography } from "@mui/material";

import { useState } from "react";

import axiosInstance from "../../../axios";
import classes from "./Logs.module.scss";
function Logs() {
  let [logs, setLogs] = useState([]);

  const handleLogs = () => {
    axiosInstance.get(`/accounts/showLog/`).then((res) => {
      if (res.status === 200) {
        setLogs(res.data);
      }
    });
  };
  return (
    <>
      <Typography
        variant="h4"
        noWrap
        component="div"
        className={classes.header}
      >
        Your Logs
      </Typography>
      <div>Click on the button to recieve your logs</div>
      <div className={classes.container}>
        <div className={classes.container__showlog}>
          <code className={classes.container__codeBox}>
            {logs.map((log) => (
              <div className={classes.log}>{JSON.stringify(log, null, 2)}</div>
            ))}
          </code>
        </div>
      </div>
      <div className={classes.btnContainer}>
        <button className={classes.btnContainer__btn} onClick={handleLogs}>
          Recieve
        </button>
      </div>
    </>
  );
}

export default Logs;
