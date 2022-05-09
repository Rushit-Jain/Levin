import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/logo.webp";
import catalogue from "../../assets/LEVIN APRIL 2022.pdf";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Row } from "react-bootstrap";

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
            <img
              className="footer-logo mx-auto d-block"
              src={logo}
              alt="levin switches"
            />
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
            <br></br>
            <NavLink
              className="links"
              to="/about"
              activeClassName="links-selected"
            >
              About Us
            </NavLink>
            <br></br>
            <NavLink
              className="links"
              to="/products/dolby"
              activeClassName="links-selected"
            >
              Our Products
            </NavLink>
            <br></br>
            <a className="links" target="_blank" href={catalogue}>
              View Pricelist
            </a>
            <br></br>
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
      <Row className="col-12 d-flex justify-content-center mb-2 mr-0 ml-0">
        Developed &amp; Maintained by&nbsp;
      </Row>
      <Row className="col-12 d-flex justify-content-center mb-2 mr-0 ml-0">
        <a
          className="footer-dev-name-link"
          href="https://www.linkedin.com/in/bhavesh-bellaney-7b8553186/"
        >
          Bhavesh Bellaney
        </a>
      </Row>
      {/* ,&nbsp; */}
      <Row className="col-12 d-flex justify-content-center mb-2 mr-0 ml-0">
        <a
          className="footer-dev-name-link"
          href="https://www.linkedin.com/in/parth-jangid-0762bb18a/"
        >
          Parth Jangid
        </a>
      </Row>
      {/* &nbsp;&amp;&nbsp; */}
      <Row className="col-12 d-flex justify-content-center mb-2 mr-0 ml-0">
        <a
          className="footer-dev-name-link"
          href="http://www.linkedin.com/in/rushit-jain-2977661a0"
        >
          Rushit Jain
        </a>
      </Row>
      <Row className="col-12 d-flex justify-content-center ml-0 mr-0">
        <center>
          <small>Copyright © 2022 Levin Switches. All Rights Reserved.</small>
        </center>
      </Row>
    </div>
  );
};

export default Footer;
