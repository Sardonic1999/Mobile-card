import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import "./Root.css";
import Body from "./Part01/Body";
import Body02 from "./Part02/Body02";
import Body03 from "./Part03/Body03";
import Body04 from "./Part04/Body04";
import Body05 from "./Part05/Body05";
import Body06 from "./Part06/Body06";
import Body07 from "./Part07/Body07";
import Body08 from "./Part08/Body08";
import Footer from "./Part09/Footer";

export default class Root extends Component {
  render() {
    return (
      <div className="root">
        <Navbar />
        <Body />
        <Body02 />
        <Body03 />
        <Body04 />
        <Body05 />
        <Body06 />
        <Body07 />
        <Body08 />
        <Footer />
      </div>
    );
  }
}
