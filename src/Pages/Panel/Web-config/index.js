import classes from "./Webconfig.module.scss";
import { Divider, Typography } from "@mui/material";

import axiosInstance from "../../../axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../store/UserContext";

function Webconfig() {
  // const context = useContext(UserContext);
  // const { user } = context;
  // const navigate = useNavigate();

  // if (user.type === "admin" || user.type === "mail" || user.type === "mail") {
  //   navigate(-1);
  // }
  const [startSuccessMeassage, setStartSuccessMessage] = useState("");
  const [startFailureMessage, setStartFailureMessage] = useState("");

  const [stopSuccessMeassage, setStopSuccessMessage] = useState("");
  const [stopFailureMessage, setStopFailureMessage] = useState("");

  const [status, setStatus] = useState([]);

  const handleStop = (e) => {
    e.preventDefault();
    axiosInstance.get(`/accounts/web/stop`).then((res) => {
      if (res.status === 200) {
        setStopSuccessMessage("succesful");
      } else {
        setStopFailureMessage("error");
      }
    });
  };

  const handleStart = (e) => {
    e.preventDefault();
    axiosInstance.get(`/accounts/web/start/`).then((res) => {
      if (res.status === 200) {
        setStartSuccessMessage("succesful");
      } else {
        setStartFailureMessage("error");
      }
    });
  };
  const getStatus = () => {
    axiosInstance.get(`accounts/web/status/`).then((res) => {
      if (res.status === 200) {
        setStatus(res);
      }
    });
  };
  return (
    <div className={classes.container}>
      <Typography variant="h4" noWrap component="div">
        Web Server Config
      </Typography>
      <div className={classes.container__start}>
        <span>You can click on this button to start your Web Server</span>
        <button className={classes.container__button} onClick={handleStart}>
          Start
        </button>
        {startSuccessMeassage && (
          <div> Your Web Server started succesfully!</div>
        )}
        {startFailureMessage && <div>An Error Occured!</div>}
      </div>
      <div className={classes.container__stop}>
        <span>You can click on this button to stop your Web Server</span>
        <button className={classes.container__button} onClick={handleStop}>
          Stop
        </button>
        {stopSuccessMeassage && <div> Your Web Server Stoped</div>}
        {stopFailureMessage && <div>An Error Occured!</div>}
      </div>
      <div className={classes.container__status}>
        <span>
          You can click on this button to see the status of your Web Server
        </span>

        <button className={classes.container__button} onClick={getStatus}>
          Status
        </button>
        <div>
          {status.map((item) => {
            return <p>{item.status}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Webconfig;
