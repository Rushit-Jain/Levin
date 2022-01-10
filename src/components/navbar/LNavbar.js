import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./LNavbar.css";
import logo from "../../assets/logo.png";
import catalogue from "../../assets/August_2021_Catalogue.pdf";

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
        <Navbar.Brand href="/home" className="logo-box">
          <img className="logo" src={logo} alt="Levin" />
        </Navbar.Brand>
        <Navbar.Toggle
          id="toggle-nav"
          aria-controls="basic-navbar-nav"
          className={this.state.navIsExp ? "rotate-nav" : "rotate-nav-opp"}
          onClick={() => this.setState({ navIsExp: !this.state.navIsExp })}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navlinks-box">
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
          </Nav>
        </Navbar.Collapse>
        {/* <span
          style={{
            backgroundColor: "black",
            height: "5px",
            width: "50vw",
            zIndex: "100",
          }}
        ></span>
        <span
          style={{
            backgroundColor: "black",
            height: "5px",
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
        ></span>
        <span
          style={{ backgroundColor: "black", height: "5px", width: "40vw" }}
        ></span> */}
      </Navbar>
    );
  }
}

export default LNavbar;
