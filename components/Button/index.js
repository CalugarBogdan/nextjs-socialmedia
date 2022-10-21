import React from "react";
import classes from "./Button.module.css";

export default function Button({ description, type }) {
  return (
    <div className={classes.button}>
      <button className={classes.btn} type={type}>
        {description}
      </button>
    </div>
  );
}
