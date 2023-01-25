import axiosInstance from "../../../axios";
import classes from "./Mailconfig.module.scss";
import UserContext from "../../../store/UserContext";
import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

function Mailconfig() {
  // const { login } = useContext(UserContext);
  // const navigate = useNavigate();

  const [startSuccessMeassage, setStartSuccessMessage] = useState("");
  const [startFailureMessage, setStartFailureMessage] = useState("");

  const [stopSuccessMeassage, setStopSuccessMessage] = useState("");
  const [stopFailureMessage, setStopFailureMessage] = useState("");

  const [status, setStatus] = useState([]);

  const handlestart = (e) => {
    e.preventDefault();
    axiosInstance.get(`/accounts/mail/start`).then((res) => {
      if (res.status === 200) {
        setStartSuccessMessage("succesful");
      } else {
        setStartFailureMessage("error");
      }
    });
  };

  const handlestop = (e) => {
    e.preventDefault();
    axiosInstance.get(`/accounts/mail/stop`).then((res) => {
      if (res.status === 200) {
        setStopSuccessMessage("succesful");
      } else {
        setStopFailureMessage("error");
      }
    });
  };

  const getStatus = () => {
    axiosInstance.get(`/accounts/mail/status`).then((res) => {
      if (res.status === 200) {
        setStatus(res);
      }
    });
  };

  return (
    <div className={classes.container}>
      <Typography variant="h6" noWrap component="div">
        Mail Config
      </Typography>
      <div className={classes.container__start}>
        <span>You can click on this button to start your Mail Server</span>
        <button className={classes.container__button} onClick={handlestart}>
          Start
        </button>
        {startSuccessMeassage && (
          <div> Your Mail Server started succesfully!</div>
        )}
        {startFailureMessage && <div>An Error Occured!</div>}
      </div>

      <div className={classes.container__stop}>
        <span>You can click on this button to stop your Mail Server</span>
        <button className={classes.container__button} onClick={handlestop}>
          Stop
        </button>
        {stopSuccessMeassage && <div> Your Mail Server Stoped</div>}
        {stopFailureMessage && <div>An Error Occured!</div>}
      </div>

      <div className={classes.container__status}>
        <span>
          You can click on this button to see the Status of your Mail servre
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

export default Mailconfig;
