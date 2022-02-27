import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import tvcabinet from "../../assets/Tv unit Designs.png";
// import bedroom from "../../assets/bedroom.jpg";
import bedroom from "../../assets/home.jpg";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className="home-row" style={{ margin: "auto" }}>
          <Col className="col-md-4 d-none d-md-block">
            <img
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              src={bedroom}
              alt="tv-cabinet"
            />
          </Col>
          <Col
            className="home-headings col-md-4 col-12"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "25px",
            }}
          >
            <h2 className="home-heading" style={{ color: "snow" }}>
              REJUVENATE THE INTERIORS
            </h2>
            <h2 className="home-heading-2">SWITCH TO THE BEST</h2>
          </Col>
          <Col className="col">
            <img
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              src={tvcabinet}
              alt="tv-cabinet"
            />
          </Col>
        </Row>
        <h1
          style={{
            backgroundColor: "brown",
            margin: 0,
            paddingTop: "20px",
            textAlign: "center",
            color: "white",
            fontSize: "3.75vw",
          }}
        >
          Our Reach
        </h1>
        <Row
          style={{ margin: 0, textAlign: "center" }}
          className="home-row-2 justify-content-center"
        >
          <Col className="align-items-center justify-content-center">
            <span className="p-0 client-count home-heading-2">
              + Clients Across{" "}
            </span>
            <span className="p-0 state-count home-heading-2">
              {" "}
              Indian States Served
            </span>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Home;
