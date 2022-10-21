import React, { useState } from "react";
import Button from "../Button";

import Input from "../Input";
import classes from "./Auth.module.css";
import GoogleButton from 'react-google-button'
import { faAmericanSignLanguageInterpreting } from "@fortawesome/free-solid-svg-icons";



export default function Auth() {
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <h1 className={classes.title}>Login</h1>
        <div id="iemail">
          <Input placeholder="Enter your E-mail" type="email" name="email" icon="faEnvelope" id="email"/>
        </div>
        <div id="ipass">
        <Input placeholder="Password" type="password" name="password" id="pass"/>
        </div>
        <Button type="button" description="Login" ></Button>
        <div className={classes.google}>
          <GoogleButton type="light" />
        </div>
        <p className={classes.inscrie}>Nu ai un cont? <a  className={classes.a} href="#">Înscrie-te</a></p>
      </div>
      <div className={classes.box}>
        <h1 className={classes.title}>Register</h1>
        <Input placeholder="Enter your E-mail" type="email" name="email" />
        <Input placeholder="Full Name" type="text" name="fullName" />
        <Input placeholder="Username" type="text" name="userName" />
        <Input placeholder="Password" type="password" name="password" />
        <Input
          placeholder="Re-enter Password"
          type="password"
          name="password"
        />
        <Button type="button" description="Register" onclick="Signup()"></Button>
        <p className={classes.inscrie}>Ai deja un cont? <a className={classes.a} href="#">Conectează-te</a></p>
      </div>
    </div>
  );
}
