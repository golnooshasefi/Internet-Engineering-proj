import React, { useContext } from "react";
import classes from "./HeroSection.module.scss";
import Button from "./Button";
import classNames from "classnames";
// import { Link } from "react-router-dom";
import serverPicture from'./server2.png';

function HeroSection() {
  return (
    <section className={classes.HeroSection}>
      <div className={classes.HeroSection__content}>
        <div className={classes.HeroSection__info}>
          <div className={classes["HeroSection__info--picture"]}>
            <img src={serverPicture} alt="server picture" />
          </div>
          <h1 className={classes["HeroSection__info--header"]}>
            Config your server!
          </h1>
          <p className={classes["HeroSection__info--text"]}>
            Let us help you to configure your own server...
          </p>
          <div>
            {/* <Link to={user.auth ? "/survey" : "/account-box"}> */}
              <Button
                color="purple"
                className={classes["HeroSection__button--right"]}
              >
                Start Configuration
              </Button>
            {/* </Link> */}

            {/* <Link to={"/FAQ"}> */}
              <Button
                color="white"
                className={classes["HeroSection__button--left"]}
              >
                Contact us
              </Button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
