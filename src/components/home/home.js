import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import tvcabinet from "../../assets/Tv unit Designs.png";
import bedroom from "../../assets/bedroom.jpg";


import "./home.css";

class Home extends Component {

  render() {
    return (
      <React.Fragment>
        <Row className="bg-light" style={{ margin: "auto" }}>
          <Col className="col-4"><img
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
            src={tvcabinet}
            alt="tv-cabinet"
          /></Col>
          <Col className="col-4" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h2 className="h4" style={{ color: "red" }}>DECORATE YOUR SPACE</h2>
            <h2 className="h1">GET BEST MATCHES</h2>
          </Col>
          <Col className="col-4">
            <img
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              src={bedroom}
              alt="tv-cabinet"
            /></Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Home;
