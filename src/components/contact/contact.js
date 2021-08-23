import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import CallRoundedIcon from "@material-ui/icons/CallRounded";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import RoomIcon from '@material-ui/icons/Room';
import TextField from "@material-ui/core/TextField";
// import Icon from '@material-ui/core/Icon';
// import Button from '@material-ui/core/Button';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

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
            {/* ROW 2 column 1 */}
            <Col className="contactInfoColumn" md={{ span: 5 }} xs={12}>
                <Row className="contactInfoColumnItems">
                    <Col>
                        <Row>
                            <Col style={{"text-align" : "center"}}>
                                <h4>Contact Information</h4>
                            </Col>
                        </Row><br/>
                        <Row>
                            <Col  style={{"text-align" : "center"}}>
                                <h6>Fill up the details to reach out to us!</h6>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="contactInfoColumnItems">
                    <Col>
                        <a href="tel:+91 9920338899" style={{ color: "white" }}>
                            <CallRoundedIcon style={{ color: "white" }} />
                            &nbsp;&nbsp;+91 9920338899
                        </a>
                    </Col>
                </Row>

                <Row className="contactInfoColumnItems">
                    <Col>
                        <a href="mailto:levin@gmail.com" style={{ color: "white" }}>
                            <EmailRoundedIcon style={{ color: "white" }} />
                            &nbsp;&nbsp;levinswitches@gmail.com
                        </a>
                    </Col>
                </Row>

                <Row className="contactInfoColumnItems">
                    <Col>
                        <a style={{ color: "white" }}>
                            <RoomIcon style={{ color: "white" }} />
                            &nbsp;&nbsp;Ritzy Industries, Gala No. 6&amp;7, Raj Prabha Mohan Industrial Estate, Naikpada, Valiv, Vasai East, Thane, Maharashtra - 401208
                        </a>
                    </Col>
                </Row>
                <br/>
                <br/>
                <Row className="contactInfoColumnIcons">
                    <Col className="icons">
                        <a>
                            <FacebookIcon style={{ color: "white", "font-size":"40pt" }} />
                        </a>
                        <a>
                            <InstagramIcon style={{ color: "white", "font-size":"40pt" }} />
                        </a>
                    </Col>
                </Row>
            </Col>
            {/* ROW 2 COL 2 */}
          <Col className="contactInputColumn">
            <form noValidate autoComplete="off">
              <Row className="contactFormRow">
                <Col>
                  <TextField
                    label="Name"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                  />
                </Col>
                    <Col >
                        <PhoneInput
                            country={'us'}
                            inputClass="contactPhoneInput"
                            // value={this.state.phone}
                            onChange={phone => console.log(phone)}
                            />
                </Col>
              </Row>
              <Row className="contactFormRow">
                <Col>
                  <TextField
                    label="Email"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                  />
                </Col>
              </Row>
              <Row className="contactFormRow">
                <Col>
                  <TextField
                    label="Subject of Enquiry"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                  />
                </Col>
              </Row>
              <Row className="contactFormRow">
                <Col>
                  <TextField
                    label="Enquiry"
                    placeholder="Enter you message."
                    multiline
                    rows={4}
                    fullWidth
                    color="secondary"
                    variant="outlined"
                  />
                </Col>
              </Row>

              <Row className="contactFormRow">
                <Col>
                    <Button variant="outline-success">Send</Button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
