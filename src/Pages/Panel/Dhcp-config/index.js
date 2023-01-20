import classes from "./Dhcpconfig.module.scss";
import { Divider, Typography } from "@mui/material";
import axiosInstance from "../../../axios";
import { useState } from "react";

function Dhcpconfig() {
  const [status, setStatus] = useState([]);
  const getStatus = () => {
    axiosInstance.get(`panel/status`).then((res) => {
      if (res.status === 200) {
        setStatus(res);
      }
    });
  };
  return (
    <div className={classes.container}>
      <Typography variant="h6" noWrap component="div">
        DHCP Config
      </Typography>
      <div className={classes.container__start}>
        <span>You can click on this button to start your DHCP Server</span>
        <button className={classes.container__button}>Start</button>
      </div>
      {/* <Divider variant="middle" /> */}
      <div className={classes.container__stop}>
        <span>You can click on this button to stop your DHCP Server</span>
        <button className={classes.container__button}>Stop</button>
      </div>
      <div className={classes.container__status}>
        <span>
          You can click on this button to see the status of your DHCP Server
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

export default Dhcpconfig;
