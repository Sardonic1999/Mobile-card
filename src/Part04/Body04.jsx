import React, { Component } from "react";
import "./Body04.css";
import book from "../img/book.png";
import ali from "../img/ali.png";
import all from "../img/all.png";
import zal from "../img/zal.png";
import lo from "../img/lo.png";
import med from "../img/med.png";
import rtv from "../img/rtv.png";
import gro from "../img/gro.png";

export default class Body04 extends Component {
  render() {
    return (
      <div className="body04">
        <div className="top-sd">
          <h1 className="bold4">and cashback!</h1>
          <p className="p4">
            It saves a little bit of money while you’re shopping, but in many
            cases it <br /> takes ages to get anything out of it. We gave it a
            thought and made <br /> cashback way more friendly. Up to 14% of
            what you spend using ZEN <br /> Mastercard ® will materialize on
            your account right after the purchase. <br /> It's like you haggled
            some cash, despite you didn't have to. Just don't <br /> forget to
            use in-app cashback link.
          </p>
          <div className="btn">
            <button className="btn4">Show more partners</button>
          </div>
        </div>
        <div className="bot-sd">
          <div className="top">
            <img src={book} alt="" />
            <img src={ali} alt="" />
            <img src={all} alt="" />
            <img src={zal} alt="" />
          </div>
          <div className="bottom">
            <img src={lo} alt="" />
            <img src={med} alt="" />
            <img src={rtv} alt="" />
            <img src={gro} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
