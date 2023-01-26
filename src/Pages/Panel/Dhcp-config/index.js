import classes from "./Dhcpconfig.module.scss";
import { Divider, Typography } from "@mui/material";
import axiosInstance from "../../../axios";
import { useContext, useState } from "react";
import { UserContext } from "../../../store/UserContext";
import { useNavigate } from "react-router-dom";

function Dhcpconfig() {
  // const context = useContext(UserContext);
  // const { user } = context;
  // const navigate = useNavigate();

  // if (user.type === "admin" || user.type === "web" || user.type === "mail") {
  //   navigate(-1);
  // }
  const [startSuccessMeassage, setStartSuccessMessage] = useState("");
  const [startFailureMessage, setStartFailureMessage] = useState("");

  const [stopSuccessMeassage, setStopSuccessMessage] = useState("");
  const [stopFailureMessage, setStopFailureMessage] = useState("");

  const [status, setStatus] = useState([]);

  const handleStart = (e) => {
    e.preventDefault();
    axiosInstance.get(`/accounts/dhcp/start`).then((res) => {
      if (res.status === 200) {
        if (res.startError === "") {
          setStartSuccessMessage("succesful");
        } else {
          setStartFailureMessage(res.startError);
        }
      } else {
        setStartFailureMessage("Couldn't connect");
      }
    });
  };

  const handleStop = (e) => {
    e.preventDefault();
    axiosInstance.get(`/accounts/dhcp/stop`).then((res) => {
      if (res.status === 200) {
        if (res.data.stopError === "") {
          setStopSuccessMessage("succesful");
        } else {
          setStopFailureMessage(res.data.stopError);
        }
      } else {
        setStopFailureMessage("Couldn't connect");
      }
    });
  };

  const getStatus = () => {
    axiosInstance.get(`/accounts/dhcp/status`).then((res) => {
      if (res.status === 200) {
        setStatus(res.data);
      }
    });
  };
  return (
    <div className={classes.container}>
      <Typography variant="h4" noWrap component="div">
        DHCP Config
      </Typography>
      <div className={classes.container__start}>
        <span>You can click on this button to start your DHCP Server</span>
        <button className={classes.container__button} onClick={handleStart}>
          Start
        </button>
        {startSuccessMeassage && (
          <div> Your DHCP Server started succesfully!</div>
        )}
        {startFailureMessage && <div>An Error Occured!</div>}
      </div>
      <div className={classes.container__stop}>
        <span>You can click on this button to stop your DHCP Server</span>
        <button className={classes.container__button} onClick={handleStop}>
          Stop
        </button>
        {stopSuccessMeassage && <div> Your DHCP Server Stoped</div>}
        {stopFailureMessage && <div>An Error Occured!</div>}
      </div>
      <div className={classes.container__status}>
        <span>
          You can click on this button to see the status of your DHCP Server
        </span>

        <button className={classes.container__button} onClick={getStatus}>
          Status
        </button>
        <div>
          {/* {status.map((item) => { */}
          <p>{status}</p>
          {/* })} */}
        </div>
      </div>
    </div>
  );
}

export default Dhcpconfig;
