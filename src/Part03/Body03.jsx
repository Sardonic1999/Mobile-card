import React, { Component } from "react";
import "./Body03.css";
import img2 from "../img/img2.png";

export default class Body03 extends Component {
  render() {
    return (
      <div className="Body03">
        <div className="left-sd">
          <h1 className="bold3">ZEN Care</h1>
          <p className="p3">
            Shopping online is usually a delightful experience. Until <br />{" "}
            it's not.
          </p>
          <p className="p3">
            Until something you buy, proves to be faulty, <br /> missing or a
            totally wrong item, you’re in for <br /> long product return
            procedures.
          </p>
          <p className="p3">
            But, here comes ZEN Care: a free, built-in shopping <br />{" "}
            protection. You can rest assured we’ll handle all of the <br />
            transaction-related problems faster and with higher <br /> success
            rates. Where lone consumers can be ignored or <br /> dumped by
            dishonest merchants, ZEN doesn't get <br /> discouraged. ZEN
            persists.
          </p>
        </div>
        <div className="right-sd">
          <img className="img2" src={img2} alt="" />
        </div>
      </div>
    );
  }
}
