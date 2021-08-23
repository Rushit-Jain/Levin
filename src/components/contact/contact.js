import React, { Component } from "react";
import CallRoundedIcon from "@material-ui/icons/CallRounded";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className="contactbox">
        <Row className="contactbox_row1">
          <Col>
            <h2>Contact Us</h2>
            <h5>Any questions or remarks? Write us a message!</h5>
          </Col>
        </Row>
        {/* Below is the code for the actual form  */}
        <Row className="contactbox_row2">
          <Col className="contactInfoColumn" md={{ span: 5 }} xs={12}>
            <Row className="contactInfoColumnItems">
              <Col>
                <Row>
                  <Col>
                    <h4>Contact Information</h4>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h6>Fill up the details to reach out to us!</h6>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="contactInfoColumnItems">
              <Col>
                <a href="tel:+91 9969994007" style={{ color: "white" }}>
                  <CallRoundedIcon style={{ color: "lightgreen" }} />
                  +91 9969994007
                </a>
              </Col>
            </Row>

            <Row className="contactInfoColumnItems">
              <Col>
                <a href="mailto:levin@gmail.com" style={{ color: "white" }}>
                  <EmailRoundedIcon style={{ color: "white" }} />
                  levin@gmail.com
                </a>
              </Col>
            </Row>

            <Row className="contactInfoColumnItems">
              <Col className="icons">
                <a>
                  <FacebookIcon style={{ color: "white" }} />
                </a>
                <a>
                  <InstagramIcon style={{ color: "white" }} />
                </a>
                <a>
                  <TwitterIcon style={{ color: "white" }} />
                </a>
              </Col>
            </Row>
          </Col>

          <Col className="contactInputColumn">
            <Row>
              <Col>
                {/* <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control type="password" placeholder="Password" />
                </FloatingLabel> */}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
