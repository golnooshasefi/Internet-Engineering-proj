import axiosInstance from "../../../axios";
import classes from "./Mailconfig.module.scss";
import UserContext from "../../../store/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Mailconfig() {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handlestop = (e) => {};

  const handlestart = (e) => {
    e.preventDefault();
    axiosInstance
      .post(`accounts/register/`, {
        // username: formData.fullName,
        // email: formData.email,
        // password: formData.password,
      })
      .then((res) => {
        if (res.status === 200) {
          login(res.data.type, res.data.username);
          localStorage.setItem("access_token", res.data.access);
          localStorage.setItem("refresh_token", res.data.refresh);
          axiosInstance.defaults.headers["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");
          navigate(-1);
          console.log(res);
          console.log(res.data);
        }
      });
  };

  const handlestatus = (e) => {};

  return (
    <div className={classes.container}>
      <div className={classes.container__header}>Mail Server Config</div>

      <div className={classes.container__start}>
        <span>You can click on this button to start your Mail Server</span>
        <button className={classes.container__button} onClick={handlestart}>
          Start
        </button>
      </div>

      <div className={classes.container__stop}>
        <span>You can click on this button to stop your Mail Server</span>
        <button className={classes.container__button} onClick={handlestop}>
          Stop
        </button>
      </div>

      <div className={classes.container__status}>
        <span>
          You can click on this button to see the Status of your Mail servre
        </span>
        <button className={classes.container__button} onClick={handlestop}>
          Status
        </button>
      </div>
    </div>
  );
}

export default Mailconfig;
