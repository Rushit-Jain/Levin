import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./LNavbar.css";
import logo from "../../assets/logo.webp";
import catalogue from "../../assets/LEVIN DEC 2024.pdf";

class LNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navIsExp: false,
    };
  }
  render() {
    return (
      <Navbar className="LNavbar" expand="lg">
        <Navbar.Brand
          href="/home"
          className="logo-box d-lg-none justify-content-center d-sm-inline"
        >
          <img className="logo" src={logo} alt="Levin" />
        </Navbar.Brand>
        <Navbar.Toggle
          id="toggle-nav"
          aria-controls="basic-navbar-nav"
          className={this.state.navIsExp ? "rotate-nav" : "rotate-nav-opp"}
          onClick={() => this.setState({ navIsExp: !this.state.navIsExp })}
        />
        <Navbar.Collapse id="basic-navbar-nav" className="basicnavbar1">
          <Nav className="navlinks-box">
            {/* <NavLink
              className="links"
              to="/home"
              activeClassName="links-selected"
            >
              Home
            </NavLink> */}
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
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand
          href="/home"
          className="logo-box d-none d-lg-flex justify-content-center"
        >
          <img className="logo" src={logo} alt="Levin" />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navlinks-box">
            <a className="links" target="_blank" href={catalogue} rel="noopener noreferrer">
              View Catalogue
            </a>
            <br></br>
            <NavLink
              className="links"
              to="/contact"
              activeClassName="links-selected"
            >
              Contact Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>

        {/* <Row><span
          style={{
            backgroundColor: "black",
            height: "5px",
            width: "50vw",
            zIndex: "100",

          }}
        ></span> */}
        {/* <span
          style={{
            backgroundColor: "black",
            height: "5px",
            display: "flex",
            transform: "rotate(45deg)",
            width: "10vw",
            zIndex: "1",
          }}
        ></span> */}

        {/* <span
          style={{
            backgroundColor: "black",
            height: "5px",
            transform: "rotate(-45deg)",
            width: "10vw",
          }}
        ></span> */}
        {/* <span
            style={{ backgroundColor: "black", height: "5px", width: "50vw" }}
          ></span></Row> */}
      </Navbar>
    );
  }
}

export default LNavbar;
