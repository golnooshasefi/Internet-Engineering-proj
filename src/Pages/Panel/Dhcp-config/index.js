import classes from "./Dhcpconfig.module.scss";
import { Divider } from "@mui/material";
import axiosInstance from "../../../axios";
import { useState } from "react";

function Dhcpconfig() {
  const [dhcpStatus, setDhcpStatus] = useState([]);

  const getDhcpStatus = () => {
    axiosInstance
      .get(`panel/dhcp/status`).then((res) => {
        if (res.status === 200) {
          setDhcpStatus(res.status);
        }
      });
  }
  return (
    <div className={classes.container}>
      <div className={classes.container__header}>IP Range</div>
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

        <button className={classes.container__button} onClick={getDhcpStatus={}}>Status</button>
        <br></br>
        <p>{dhcpStatus}</p>
      </div>
    </div>
  );
}

export default Dhcpconfig;
