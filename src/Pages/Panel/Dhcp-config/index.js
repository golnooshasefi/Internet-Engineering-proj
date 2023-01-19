import classes from "./Dhcpconfig.module.scss";
import { Divider } from "@mui/material";

function Dhcpconfig() {
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
          You can click on this button to see the Status of your dhcp servre
        </span>

        <button className={classes.container__button}>Status</button>
      </div>
    </div>
  );
}

export default Dhcpconfig;
