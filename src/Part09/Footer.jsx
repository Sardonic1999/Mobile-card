import React, { Component } from "react";
import "./Footer.css";
import Frame from "../img/Frame.png";
import logo2 from "../img/logo2.png";
import logo3 from "../img/logo3.png";

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="line"></div>
        <div className="main02">
          <div className="part02">
            <p className="p9">Learn</p>

            <p>Help center</p>
            <p>Join ZEN team</p>
            <p>Privacy Policy</p>
            <p>Cookies</p>
            <p>Terms of use</p>
          </div>
          <div className="part03">
            <p className="p9">Discover</p>

            <p>For developers</p>
            <p>Apple Pay</p>
            <p>Google Pay</p>
          </div>
          <div className="part04">
            <p className="p9">Offer</p>

            <p>Business</p>
            <p>Personal</p>
          </div>
          <div className="part05">
            <p className="p9">Language</p>

            <p>English</p>
            <p>Uzbek</p>
          </div>
          <div className="part06">
            <p className="p9">Follow us</p>

            <img src={Frame} alt="" />
          </div>
          <div className="part07">
            <p className="p9">Contact</p>

            <p>sardorjurayev555@gmail.com</p>
          </div>
        </div>
        <img className="logo2" src={logo2} alt="" />

        <div className="logo">
          <div className="p10">
            <p>
              ZEN.COM is a licensed financial institution under the supervision
              of the Central Bank of Lithuania approved by European Banking
              Authority for 31 countries. <br /> Registration number of the
              company 304749651, VAT ID LT100011714916. License of electronic
              money institutions number LB000457. Share capital <br />{" "}
              2.185.000,00 EUR. Company address: Mėsinių g. 5, LT-01133,
              Vilnius, Lithuania. Sales Office: ul. Emilii Plater 53, 00-113
              Warsaw, Poland.
            </p>
          </div>
          <div className="logo3">
            <img src={logo3} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
