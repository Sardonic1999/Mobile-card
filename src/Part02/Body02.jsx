import React, { Component } from "react";
import "./Body02.css";
import img1 from "../img/img1.png";

export default class Body02 extends Component {
  render() {
    return (
      <div className="body02">
        <div className="left">
          <img className="img1" src={img1} alt="" />
        </div>
        <div className="right">
          <p className="bold02">1-year warranty boost</p>
          <h1 className="text02">
            ZEN cards have a very neat feature that will help you <br />{" "}
            whenever your electronic devices start failing after the <br />{" "}
            standard warranty ends, which is pretty common.
          </h1>
          <h1 className="text02">
            When you buy any electronics with your ZEN shopping <br />{" "}
            Mastercard®, their warranty gets extended by one <br /> year. How
            does it work? It simply does. Automatically.
          </h1>
        </div>
      </div>
    );
  }
}
