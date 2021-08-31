import React, { Component } from "react";
import "./Body.css";
import img0 from "../img/img0.png";
import appstore from "../img/app.png";
import google from "../img/google.png";

export default class Body extends Component {
  render() {
    return (
      <div className="body">
        <div className="left-div">
          <h1 className="body-text">In every beginning, there is chaos.</h1>
          <p className="bold-text">
            Peaceful shopping. <br />
            Mindful money.{" "}
          </p>
          <h1 className="body-text2">
            See how we can help with making your shopping <br /> experience and
            money management more ZEN.
          </h1>
          <img className="appstore" src={appstore} alt="" />
          <img className="google" src={google} alt="" />
        </div>
        <div className="right-div">
          <img className="img0" src={img0} alt="" />
        </div>
      </div>
    );
  }
}
