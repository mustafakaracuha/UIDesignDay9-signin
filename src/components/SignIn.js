import React from "react";
import Divider from '@mui/material/Divider';
import apple from "../assets/img/apple.svg";
import google from "../assets/img/google.svg";

export default function SignIn() {
  return (
    <>
      <div className="box">
        <div className="titleBox">
          <h1>Co continue, please sign in</h1>
        </div>
        <div className="buttonsBox">
          <div className="buttons">
            <button className="apple">
              <img width={23} src={apple} />
              Continue with Apple
            </button>
            <button className="google">
              <img width={25} src={google} />
              Continue with Apple
            </button>
          </div>
          <div className="divider">
          <Divider>OR</Divider>
          </div>
          <div className="emailBox">
            <p>Email Address</p>
            <input type="" name=""/>
            <button type="">Continue with Apple</button>
          </div>
        </div>
      </div>
    </>
  );
}
