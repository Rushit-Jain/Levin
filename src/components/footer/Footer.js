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
      <hr style={{ height: "20px" }}></hr>
      <div
        className="row"
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div className="col-lg-4 col-12">
          <div className="row">
            <img className="footer-logo mx-auto d-block" src={logo} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "30px",
            }}
            className="row"
          >
            <NavLink
              className="links"
              to="/home"
              activeClassName="links-selected"
            >
              Home
            </NavLink>
            <NavLink
              className="links"
              to="/about"
              activeClassName="links-selected"
            >
              About Us
            </NavLink>
            <NavLink
              className="links"
              to="/products/dolby"
              activeClassName="links-selected"
            >
              Our Products
            </NavLink>
            <a className="links" target="_blank" href={catalogue}>
              View Catalogue
            </a>
            <NavLink
              className="links"
              to="/contact"
              activeClassName="links-selected"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d874.5872769592792!2d72.86957772918967!3d19.415424499180894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9d374d7930b%3A0xae147f1f052fc21d!2sLEVIN%20Switches!5e1!3m2!1sen!2sin!4v1641804300597!5m2!1sen!2sin"
            width="350"
            height="250"
            style={{ border: 0 }}
            className="footer-iframe"
            loading="lazy"
          ></iframe>
        </div>
        <div className="col-lg-4 d-flex align-items-center pt-4 pt-lg-0 justify-content-center col-12">
          <a href="https://www.facebook.com/levinswitches" target="_blank">
            <FacebookIcon
              className="footer-social-media"
              style={{ fontSize: "40pt", color: "rgb(150, 152, 154)" }}
            />
          </a>
          <a
            href="https://www.instagram.com/levinswitches_india/"
            target="_blank"
          >
            <InstagramIcon
              className="footer-social-media"
              style={{ fontSize: "40pt", color: "rgb(150, 152, 154)" }}
            />
          </a>
        </div>
      </div>
      <div className="row"></div>
      <hr style={{ marginTop: "30px" }} />
      <div className="col-12 d-flex justify-content-center">
        <small>
          Copyright © 2021 Levin Switches. All Rights Reserved.
          {/* Privacy Policy |
          Terms Of Use | Legal | Site Map */}
        </small>
      </div>
    </div>
  );
};

export default Footer;
