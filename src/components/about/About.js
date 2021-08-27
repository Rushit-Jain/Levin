import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CircuitCell from "./CircuitCell";
import CircuitSwitch from "./CircuitSwitch";
import aboutJumbotronImage from "../../assets/illustrations/about.svg";
import "./About.css";

const About = (props) => {
  return (
    <>
      <Row
        style={{
          margin: 0,
          marginBottom: "25px",
          padding: "15px",
          alignItems: "center",
          backgroundColor: "antiquewhite",
          textAlign: "center",
        }}
      >
        <Col xs={12} md={6}>
          <Col>
            <img
              src={aboutJumbotronImage}
              style={{ background: "antiquewhite", width: "80%" }}
            />
          </Col>
        </Col>
        <Col style={{ alignSelf: "center" }}>
          <h2 className="about-heading">About Us</h2>
          <h6 className="about-title-subheading">Know Us Better</h6>
        </Col>
      </Row>
      <Container className="about-container">
        <Row className="p-4">
          <Col xs={12} lg={3}>
            <h2 className="about-subheading">HISTORY</h2>
            <p>
              The journey began at ['Light House PROPER NAME'] in [YEAR] as a
              [wholesale/retail] [lighting/switch] selling shop in Madras (now
              Chennai), Tamil Nadu. Shri Jayantilal Jain, under the guidance of
              his brother, Shri Kantilal Jain, established 'Light House' as one
              of the most popular electrical goods-selling shops in Chennai.
              Following the unprecedented success of the business, Levin was
              launched as a brand selling electrical and imported lighting
              products by Shri Jayantilal Jain and his sons Girish Jain, Dhanish
              Jain and Anish Jain. [PHOTOS OF LIGHT HOUSE (SHADOW DESIGN)]
            </p>
          </Col>
          <Col lg={1} className="d-none d-lg-block">
            <CircuitSwitch />
          </Col>
          <Col xs={12} className="d-block d-lg-none">
            <CircuitCell />
          </Col>
          <Col xs={12} lg={4}>
            <h2 className="about-subheading">OPERATION AT LEVIN</h2>
            <p>
              Established by Shri Jayantilal Jain in [YEAR] in Thane's Vasai,
              Ritzy Industries became the first manufacturing unit for Levin.
              Today, Ritzy Industries is also the seat of Shri Jayantilal Jain
              and his son, Anish Jain. It has a capacity of producing [CAPACITY]
              electrical goods in a single day. With just 30 unskilled
              labourers, the unit has always outdone its expectations. All the
              products manufactured under the brand undergo rigorous testing
              before they hit the market. Levin ensures quality without delay or
              scope for complaints. [PHOTOS OF RITZY MANUFACTURING MACHINES AND
              TESTING MACHINES]
            </p>
          </Col>
          <Col lg={1} className="d-none d-lg-block">
            <CircuitSwitch />
          </Col>
          <Col xs={12} className="d-block d-lg-none">
            <CircuitCell />
          </Col>
          <Col xs={12} lg={3}>
            <h2 className="about-subheading">QUALITY ASSURANCE</h2>
            <p>
              Today, Levin sells its products to almost all the major Indian
              cities. All the products manufactured under Levin are produced at
              Ritzy Industries, Vasai. All Levin products come with an [ISI
              certification]. With extremely reasonable product prices and an
              invaluable customer goodwill, Levin is, today, one of the leading
              brands in its domain. [PHOTOS OF RED PLATE PRODUCT]
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
