import React, { Component } from "react";
import "./Body06.css";
import img4 from "../img/img4.png";

export default class Body06 extends Component {
  render() {
    return (
      <div className="body06">
        <div className="left">
          <img className="img4" src={img4} alt="" />
        </div>
        <div className="right">
          <h1 className="bold6">Shopping with no fees</h1>
          <p className="p6">
            Online shopping is flawed with all kind of fees. Currency <br />{" "}
            exchange fees, processing fees and even fees for having <br />{" "}
            multiple fees. Getting rid of them became our hobby. Same <br />{" "}
            goes for ATM withdrawal fees.
          </p>
          <p className="p6">
            Enjoy your money globally. Every uncut part of it. <br /> Keep
            reading. ZEN goes beyond shopping with a <br /> fully functional
            account.
          </p>
        </div>
      </div>
    );
  }
}
