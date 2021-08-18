import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/logo.png";
import catalogue from "../../assets/August_2021_Catalogue.pdf";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = (props) => {
  return (
    <div className="footer">
      <hr
        style={{
          background: "rgb(150, 152, 154)",
          height: "1px",
          marginBottom: "30px",
        }}
      />
      <div className="row">
        <div className="col-lg-4 col-12">
          <img className="footer-logo mx-auto d-block" src={logo} />
        </div>
        <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center col-12">
          <NavLink className="links" to="/home">
            Home
          </NavLink>
          <NavLink className="links" to="/about">
            About Us
          </NavLink>
          <NavLink className="links" to="/products">
            Our Products
          </NavLink>
          <a className="links" target="_blank" href={catalogue}>
            View Catalogue
          </a>
          <NavLink className="links" to="/contact">
            Contact Us
          </NavLink>
        </div>
        <div className="col-lg-4 d-flex align-items-center pt-4 pt-lg-0 justify-content-center col-12">
          <a href="https://www.facebook.com/levinswitches" target="_blank">
            <FacebookIcon
              style={{ fontSize: "40pt", color: "rgb(150, 152, 154)" }}
            />
          </a>
          <a
            href="https://www.instagram.com/levinswitches_india/"
            target="_blank"
          >
            <InstagramIcon
              style={{ fontSize: "40pt", color: "rgb(150, 152, 154)" }}
            />
          </a>
        </div>
      </div>
      <hr style={{ marginTop: "30px" }} />
      <div className="col-12 d-flex justify-content-center">
        <small>
          Copyright © 2021 Levin Switches. All Rights Reserved. Privacy Policy |
          Terms Of Use | Legal | Site Map
        </small>
      </div>
    </div>
  );
};

export default Footer;
