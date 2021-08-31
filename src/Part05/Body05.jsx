import React, { Component } from "react";
import "./Body05.css";
import img3 from "../img/img3.png";
import pay from "../img/pay.png";
import g from "../img/g.png";

export default class Body05 extends Component {
  render() {
    return (
      <div className="body05">
        <div className="left-s">
          <h1 className="bold5">ZEN shopping Mastercard</h1>
          <p className="p5">
            You shouldn’t be bound to use one card at a time, <br /> especially
            when it has so many benefits! With ZEN, you can <br /> manage your
            shopping and finances with both <br /> physical and virtual cards.
            It’s convenient, streamlined, and works <br /> like a charm. You can
            have a shopping card, a <br />
            subscription card, and whatever other cards that make <br /> sense
            to you.
          </p>
          <div className="icon">
            <img className="icons" src={pay} alt="" />
            <img className="icons" src={g} alt="" />
          </div>
        </div>
        <div className="right-s">
          <img src={img3} alt="" />
        </div>
      </div>
    );
  }
}
