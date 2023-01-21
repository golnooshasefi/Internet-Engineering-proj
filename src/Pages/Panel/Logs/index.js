import { Button } from "@mui/material";

import { useState } from "react";

import axiosInstance from "../../../axios";
import classes from "./Logs.module.scss";
import data from "../../../data.json";
function Logs() {
  let [logs, setLogs] = useState([data]);

  const handleLogs = () => {
    axiosInstance.get(`/accounts/showLog/`).then((res) => {
      if (res.status === 200) {
        setLogs(res.data);
      }
    });
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.container__showlog}>
          {data.map((log) => {
            return (
              <div className={classes.container}>
                <code className={classes.container__codeBox}>
                  {JSON.stringify(log)}
                </code>
              </div>
            );
          })}
        </div>
      </div>
      <Button
        //   className="container__form__submitbtn"
        onClick={handleLogs}
        variant="outlined"
        sx={{ mt: 5, mb: 3 }}
      >
        Recieve
      </Button>
    </>
  );
}

export default Logs;
