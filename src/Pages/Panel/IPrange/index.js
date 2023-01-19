import { TextField } from "@mui/material";
import classes from "./Iprange.module.scss";
function Iprange() {
  const handleSubmit = (event) => {};
  return (
    <div className={classes.container}>
      <span className={classes.container__header}>Change IP Range</span>
      <span>You can change your IP range here</span>
      <div className={classes.iprange}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div>
            <span className={classes.start}>
              from 192.168.100.
              <TextField
                sx={{
                  width: { sm: 50 },
                  "& .MuiInputBase-root": {
                    height: 40,
                  },
                }}
                id="outlined-basic"
                variant="outlined"
              />
            </span>
            <span>
              to 192.168.100.
              <TextField
                sx={{
                  width: { sm: 50 },
                  "& .MuiInputBase-root": {
                    height: 40,
                  },
                }}
                id="outlined-basic"
                variant="outlined"
              />
            </span>
          </div>
          <input type="submit" value="Submit" className={classes.submitbtn} />
        </form>
      </div>
    </div>
  );
}

export default Iprange;
