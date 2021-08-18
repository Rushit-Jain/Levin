import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./LNavbar.css";
import logo from "../../assets/logo.png";

class LNavbar extends Component {
  render() {
    return (
      <Navbar className="LNavbar" expand="lg">
        <Navbar.Brand href="/home" className="logo-box">
          <img className="logo" src={logo} alt="Levin" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navlinks-box">
            <NavLink className="links" to="/home">
              Home
            </NavLink>
            <NavLink className="links" to="/link">
              About Us
            </NavLink>
            <NavLink className="links" to="/home">
              Products
            </NavLink>
            <NavLink className="links" to="/link">
              Contact Us
            </NavLink>
            <NavLink className="links" to="/link">
              Download Catalogue
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default LNavbar;
