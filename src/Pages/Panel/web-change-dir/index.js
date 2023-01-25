import classes from "./Webchangedir.module.scss";
import { Divider, Typography } from "@mui/material";
import axiosInstance from "../../../axios";
import { useState, useEffect } from "react";

function Webchangedir() {
    const [submitSuccessMeassage, setSubmitSuccessMessage] = useState("");
    const [submitFailureMessage, setSubmitFailureMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance.post(`/accounts/web/submit`).then((res) => {
          if (res.status === 200) {
            if (res.startError === "") {
              setSubmitSuccessMessage("succesful");
            }
            else {
              setSubmitFailureMessage(res.startError);
            }
          } else {
            setSubmitFailureMessage("error");
          }
        });
      };
    return (
        <div className={classes.container}>
            <Typography variant="h4" noWrap component="div">
                Web Server Change Directory
            </Typography>
            <div className={classes.container__start}>
                <span>Your current Web Server home directory is:&nbsp; </span>
                <i>Ubuntu/server/webserver</i>
            </div>
            <div className={classes.container__stop}>
                <span>You can type some directory to change your Web Server home directory&nbsp;</span>
                <input className={classes.container__input} type="text"></input>
                <button className={classes.container__submit} onClick={handleSubmit}>
                Submit
                </button>
                {submitSuccessMeassage && (
                <div> Your home directory changed succesfully!</div>
                )}
                {submitFailureMessage && <div>An Error Occured!</div>}
            </div>
            
        </div>
    );
}

export default Webchangedir;