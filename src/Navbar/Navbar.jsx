import React, { Component } from "react";
import "./Navbar.css";
import logo1 from "../img/logo1.png";
import red from "../img/red.png";
import yellow from "../img/yellow.png";

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav-main">
        <div className="left-side">
          <img className="logo1" src={logo1} alt="" />
          <img className="red" src={red} alt="" />
          <img className="yellow" src={yellow} alt="" />
          <h1 className="nav-text">Personal</h1>
          <h1 className="nav-text">Business</h1>
        </div>
        <div className="right-side">
          <div className="text02">
            <h1 className="nav-text2">Zenefits</h1>
            <h1 className="nav-text2">Features</h1>
            <h1 className="nav-text2">Pricing</h1>
            <button className="btn-get">Get app</button>
          </div>
        </div>
      </div>
    );
  }
}
