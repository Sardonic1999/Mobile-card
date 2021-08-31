import React, { Component } from "react";
import "./Body07.css";
import img5 from "../img/img5.png";

export default class Body07 extends Component {
  render() {
    return (
      <div className="body07">
        <div className="left">
          <h1 className="bold7">
            One app, one account, <br /> many currencies
          </h1>
          <p className="p7">
            ZEN Mastercard® was made for spending money. ZEN account <br /> is
            here to store and manage it peacefully, from the <br /> inside of
            your pocket.
          </p>
          <p className="p7">
            You can use it just like a regular account, as it has its own <br />{" "}
            IBAN and works just the way any bank account would —<br /> but
            better. Store up to 30 currencies and transfer them <br /> easily in
            many ways.
          </p>
        </div>
        <div className="right">
          <img className="img5" src={img5} alt="" />
        </div>
      </div>
    );
  }
}
