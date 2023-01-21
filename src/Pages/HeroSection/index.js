import React, { useContext } from "react";
import classes from "./HeroSection.module.scss";
import Button from "./Button";
import classNames from "classnames";
import { Link } from "react-router-dom";
import serverPicture from'./server2.png';

function HeroSection() {
  return (
    <div className={classes.Home}>
      <div className={classes.Info}>
        <h1 className={classes.Header}>
        Config your server!
        </h1>
        <p className={classes.Description}>
          Let us help you to configure your own server...
        </p>
        <div>
          <Link to="/login">
            <Button
              color="purple"
              className={classes.ButtonRight}
            >
              Start Configuration
            </Button>
          </Link>

          <Button
              color="white"
              className={classes.ButtonLeft}
            >
              Contact us
            </Button>
        </div>
      </div>
      <div className={classes.Picture}><img src={serverPicture}  width="100%" height="100%" alt="Picture" /></div>
    </div>
  );
}

export default HeroSection;
