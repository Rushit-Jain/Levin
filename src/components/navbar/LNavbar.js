import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default LNavbar;
