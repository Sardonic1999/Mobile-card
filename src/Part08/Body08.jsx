import React, { Component } from "react";
import "./Body08.css";
import img6 from "../img/img6.png";
import app from "../img/app.png";
import google from "../img/google.png";

export default class Body08 extends Component {
  render() {
    return (
      <div className="body08">
        <div className="left">
          <img className="img6" src={img6} alt="" />
        </div>
        <div className="right">
          <h1 className="bold8">
            Quick and easy <br /> account creation
          </h1>
          <p className="p8">
            Now, you might be thinking that it’s just like any other <br />{" "}
            account creation… Long, tiresome and full of endless <br /> blanks
            to fill in. Well, it’s not.
          </p>
          <p className="p8">
            We have designed the whole process to make it the <br /> simplest
            and the shortest one ever conceived for a <br /> personal account.
            Download the app and see for yourself!
          </p>
          <div className="store">
            <img className="stores01" src={app} alt="" />
            <img className="stores02" src={google} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
