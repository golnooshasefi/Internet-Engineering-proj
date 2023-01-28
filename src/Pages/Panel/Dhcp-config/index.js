import classes from "../Configs.module.scss";
import { Divider, Typography } from "@mui/material";
import axiosInstance from "../../../axios";
import { useContext, useState } from "react";
import { UserContext } from "../../../store/UserContext";
import { useNavigate } from "react-router-dom";

function Dhcpconfig() {
  const context = useContext(UserContext);
  const { user } = context;
  const navigate = useNavigate();

  // if (user.type !== "dhcp" && user.type !== "admin") {
  //   navigate("/panel");
  // }
  const [startSuccessMeassage, setStartSuccessMessage] = useState("");
  const [startFailureMessage, setStartFailureMessage] = useState("");

  const [stopSuccessMeassage, setStopSuccessMessage] = useState("");
  const [stopFailureMessage, setStopFailureMessage] = useState("");

  const [status, setStatus] = useState(null);

  const handleStart = (e) => {
    e.preventDefault();
    axiosInstance
      .get(`/accounts/dhcp/start`)
      .then((res) => {
        if (res.status === 200) {
          if (res.data.startError === "") {
            setStartSuccessMessage("succesful");
          } else {
            setStartFailureMessage(res.data.startError);
          }
        } else {
          setStartFailureMessage("Couldn't connect");
        }
      })
      .catch(() => {
        setStartFailureMessage("error");
      });
  };

  const handleStop = (e) => {
    e.preventDefault();
    axiosInstance
      .get(`/accounts/dhcp/stop`)
      .then((res) => {
        if (res.status === 200) {
          if (res.data.stopError === "") {
            setStopSuccessMessage("succesful");
          } else {
            setStopFailureMessage(res.data.stopError);
          }
        } else {
          setStopFailureMessage("Couldn't connect");
        }
      })
      .catch(() => {
        setStopFailureMessage("error");
      });
  };

  const getStatus = () => {
    setStatus(null);
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
          <div className={classes.message}>
            {" "}
            Your DHCP Server started succesfully!
          </div>
        )}
        {startFailureMessage && (
          <div className={classes.error__message}>An Error Occured!</div>
        )}
      </div>
      <div className={classes.container__stop}>
        <span>You can click on this button to stop your DHCP Server</span>
        <button className={classes.container__button} onClick={handleStop}>
          Stop
        </button>
        {stopSuccessMeassage && (
          <div className={classes.message}> Your DHCP Server Stoped!</div>
        )}
        {stopFailureMessage && (
          <div className={classes.error__message}>An Error Occured!</div>
        )}
      </div>
      <div className={classes.container__status}>
        <span>
          You can click on this button to see the status of your DHCP Server
        </span>

        <button className={classes.container__button} onClick={getStatus}>
          Status
        </button>
      </div>
      {status && (
        <div className={classes.containercode}>
          <code className={classes.containercode__codeBox}>
            <div className={classes.status}>
              {JSON.stringify(status, null, 2)}
            </div>
          </code>
        </div>
      )}
    </div>
  );
}

export default Dhcpconfig;
