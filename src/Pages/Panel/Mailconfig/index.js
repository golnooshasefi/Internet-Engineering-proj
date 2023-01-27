import axiosInstance from "../../../axios";
import classes from "../Configs.module.scss";
import { UserContext } from "../../../store/UserContext";
import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Mailconfig() {
  const context = useContext(UserContext);
  const { user } = context;
  const navigate = useNavigate();

  if (user.type !== "mail" && user.type !== "admin") {
    navigate("/panel");
  }

  const [startSuccessMeassage, setStartSuccessMessage] = useState("");
  const [startFailureMessage, setStartFailureMessage] = useState("");

  const [stopSuccessMeassage, setStopSuccessMessage] = useState("");
  const [stopFailureMessage, setStopFailureMessage] = useState("");

  const [status, setStatus] = useState(null);

  const handlestart = (e) => {
    e.preventDefault();
    axiosInstance
      .get(`/accounts/mail/start`)
      .then((res) => {
        if (res.status === 200) {
          if (res.data.startError === "") {
            setStartSuccessMessage(res.data.startOutput);
          } else {
            setStartFailureMessage("error");
          }
        } else {
          setStartFailureMessage("error");
        }
      })
      .catch(() => {
        setStartFailureMessage("error");
      });
  };

  const handlestop = (e) => {
    e.preventDefault();
    axiosInstance
      .get(`/accounts/mail/stop`)
      .then((res) => {
        if (res.status === 200) {
          if (res.data.stopError === "") {
            setStopSuccessMessage(res.data.stopOutput);
          } else {
            setStopFailureMessage("error");
          }
        } else {
          setStopFailureMessage("error");
        }
      })
      .catch(() => {
        setStopFailureMessage("error");
      });
  };

  const getStatus = () => {
    setStatus(null);
    axiosInstance.get(`/accounts/mail/status`).then((res) => {
      if (res.status === 200) {
        setStatus(res);
      }
    });
  };

  return (
    <div className={classes.container}>
      <Typography variant="h4" noWrap component="div">
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
        {stopSuccessMeassage && (
          <div className={classes.message}> Your Mail Server Stoped</div>
        )}
        {stopFailureMessage && (
          <div className={classes.error__message}>An Error Occured!</div>
        )}
      </div>

      <div className={classes.container__status}>
        <span>
          You can click on this button to see the Status of your Mail servre
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

export default Mailconfig;
