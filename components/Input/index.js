import React from "react";
import classes from "./Input.module.css";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Input({ label, placeholder, type, name, icon }) {
  return (
    <div className={classes.input}>
      <FontAwesomeIcon icon={{icon}}/>
      <label for="email">{label}</label>
      <input type={type} placeholder={placeholder} name={name} />
    </div>
  );
}
