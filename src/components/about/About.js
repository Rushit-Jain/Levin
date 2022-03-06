import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CircuitCell from "./CircuitCell";
import CircuitSwitch from "./CircuitSwitch";
import aboutJumbotronImage from "../../assets/illustrations/about.svg";
import aboutOperation from "../../assets/images/about_operation.jpg";
import aboutQuality from "../../assets/images/about_quality.jpg";
import aboutHistory from "../../assets/images/about_history.gif";
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
          <h2 className="about-heading product-category-title">About Us</h2>
          <h6 className="about-title-subheading">Know Us Better</h6>
        </Col>
      </Row>
      <Container className="about-container">
        <Row className="p-4">
          <Col xs={12} lg={3}>
            <h2 className="about-subheading">HISTORY</h2>
            <p>
              The journey began at 'Light House' in 1972 as a wholesale shop
              selling electrical goods in Madras, Tamil Nadu, India. Shri
              Jayantilal Jain, under the guidance of his brother, Shri Kantilal
              Jain, established 'Light House' as one of the most popular
              electrical goods-selling shops in Chennai. Following the
              unprecedented success of the business, Levin was launched as a
              brand selling electrical and imported lighting products by Shri
              Jayantilal Jain and his sons Girish Jain, Dhanish Jain and Anish
              Jain.
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={aboutHistory} height="400vh" width="400vw"></img>
            </div>
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
              Established by Shri Jayantilal Jain in 2002 in Mumbai's Ram Mandir
              area, Ritzy Industries became the first manufacturing unit for
              Levin products. Following the 2005 Mumbai Floods, the unit was
              shifted to Thane's Vasai. Today, Ritzy Industries is also the seat
              of Shri Jayantilal Jain and his son, Anish Jain. It has a capacity
              of producing 20000 pieces of electrical goods in a single day.
              With just 30 unskilled labourers, the unit has always outdone its
              expectations. All the products manufactured under the brand
              undergo rigorous testing before they hit the market. Levin ensures
              quality without delay or scope for complaints.
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={aboutOperation}
                style={{
                  borderRadius: "10px",
                }}
                height="350vh"
                width="200vw"
              ></img>
            </div>
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
              Ritzy Industries, Vasai. All products that require a Bureau of
              Indian Standards (BIS) certification are ISI-certified. With
              extremely reasonable product prices and an invaluable customer
              goodwill, Levin is, today, one of the leading brands in its
              domain.
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={aboutQuality}
                style={{
                  borderRadius: "10px",
                }}
                height="300vh"
                width="250vw"
              ></img>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
