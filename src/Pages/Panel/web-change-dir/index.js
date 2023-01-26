import classes from "./Webchangedir.module.scss";
import { TextField, Typography } from "@mui/material";
import axiosInstance from "../../../axios";
import { useState, useEffect } from "react";

function Webchangedir() {
    const [submitSuccessMeassage, setSubmitSuccessMessage] = useState("");
    const [submitFailureMessage, setSubmitFailureMessage] = useState("");
    const [currentDirectory, setCurrentDirectory] = useState("");
    const [errorCurrentDirectory, setErrorCurrentDirectory] = useState(false);
    const [formData, updateFormData] = useState({
      newDirectory : "",
    });

    const handleChange = (e) => {
      updateFormData({
        ...formData,
        [e.target.name]: e.target.value.trim(),
      });
    };

    useEffect(() => {
      axiosInstance.get(`//`).then((res) => {
        if(res.status === 200) {
          setCurrentDirectory(res.data.HomeDir) 
        }
        else {
          setErrorCurrentDirectory(true);
        }
      });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance.post(`//`, {
          newDirectory: formData.newDirectory,
        }).then((res) => {
          if (res.status === 200) {
            if (res.data.change_directory === "") {
              setSubmitSuccessMessage("succesful");
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
                <i><u>{currentDirectory}</u></i>
                {errorCurrentDirectory && <div>An error occurred</div>}
            </div>
            <p>You can type some directory to change your Web Server home directory</p>
            <form className={classes.form} onSubmit={handleSubmit}>
              <div>
                <span>
                  <TextField
                    sx={{
                      width: { sm: 400 },
                      "& .MuiInputBase-root": {
                        height: 52,
                      },
                    }}
                    value={formData.newDirectory}
                    onChange={handleChange}
                    name="newDirectory"
                    id="outlined-basic"
                    variant="outlined"
                    type="text"
                  />
                </span>
                <input type="submit" value="Submit" className={classes.submitbtn} />
              </div>

              </form>
              {submitSuccessMeassage && (
              <div> Your home directory status is: </div>
              )} {submitSuccessMeassage}
              {submitFailureMessage && <div>An Error Occured!</div>}
              
            </div>
            
        
    );
}

export default Webchangedir;