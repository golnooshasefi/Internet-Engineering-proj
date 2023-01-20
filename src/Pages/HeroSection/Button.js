import React from "react";
import classNames from "classnames";
import classes from "./Button.module.scss";

function Button({ children, color, className, onClickHandler, isDisable }) {
  return (
    <button
      className={classNames(
        classes.Button,
        {
          [classes[`Button--${color}`]]: color,
        },
        className
      )}
      disabled={isDisable}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}
export default Button;
