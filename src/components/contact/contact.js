import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

import CallRoundedIcon from "@material-ui/icons/CallRounded";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import MaterialBtn from "@material-ui/core/Button";
import RoomIcon from "@material-ui/icons/Room";
import TextField from "@material-ui/core/TextField";
// import Icon from '@material-ui/core/Icon';
// import Button from '@material-ui/core/Button';

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import "./Contact.css";
import contactImg from "./../../assets/contact.svg";
import { maxWidth, width } from "@material-ui/system";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      emailId: null,
      phoneClassName: "",
      subject: null,
      message: null,
      phone: null,
      validName: -1,
      validEmailId: -1,
      validSubject: -1,
    };
    // -1 means field is not dirty | 0 means field is dirty but not valid | 2 means field is valid and touched
  }

  checkName = (e) => {
    let name = e.target.value;
    if (name === "") {
      this.setState({ name: name, validName: 0 });
    } else if (name.match(/^[a-zA-Z\s]+$/)) {
      this.setState({ name: name, validName: 2 });
    } else {
      this.setState({ validName: 0 });
    }
  };

  checkSubject = (e) => {
    let subject = e.target.value;
    if (subject === "") {
      this.setState({ subject: subject, validSubject: 0 });
    } else if (subject != "") {
      this.setState({ subject: subject, validSubject: 2 });
    } else {
      this.setState({ validSubject: 0 });
    }
  };

  checkEmail = (e) => {
    let email = e.target.value;
    if (email === "") {
      this.setState({ emailId: email, validEmailId: 0 });
    } else if (
      email.match(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      )
    ) {
      this.setState({ emailId: email, validEmailId: 2 });
    } else {
      this.setState({ validEmailId: 0 });
    }
  };

  storePhone = (num) => this.setState({ phone: num });

  storeMessage = (e) => this.setState({ message: e.target.value });

  colorAdd = () =>
    this.setState({ phoneClassName: "phoneborder", validPhone: 2 });

  colorRemove = () => this.setState({ phoneClassName: "" });

  dirtyName = () =>
    this.state.validName == -1 ? this.setState({ validName: 0 }) : "";
  dirtyEmailId = () =>
    this.state.validEmailId == -1 ? this.setState({ validEmailId: 0 }) : "";
  dirtySubject = () =>
    this.state.validSubject == -1 ? this.setState({ validSubject: 0 }) : "";

  render() {
    return (
      <React.Fragment>

        <Row className="contactbox_row1" style={{margin:0, padding:"15px", alignItems:"center", marginBottom:"15px"}}>
          <Col className="outer-box-image" xs={12} md={6}>  
            <Col className="inner-box-image">
              <img src={contactImg} style={{background:"antiquewhite", width:"80%"}}/>
            </Col>
          </Col>
          <Col style={{alignSelf: "center"}}>
            <h2 className="about-heading">Contact</h2>
            <h6 className="contact-subheading">
              Any questions or remarks? Write us a message!
            </h6>
          </Col>
        </Row>

        <Container className="contactbox">
          {/* Below is the code for the actual form  */}
          <Row>
            <Row className="bgImage">
              <Row className="contactbox_row2 glass">
                {/* ROW 2 column 1 */}
                <Col
                  className="contactInfoColumn mb-3 mb-md-0"
                  md={{ span: 5 }}
                  xs={12}
                >
                  <Row className="contactInfoColumnItems">
                    <Col>
                      <Row>
                        <Col
                          style={{
                            "text-align": "center",
                            fontFamily: "BeonFont",
                          }}
                        >
                          <h3 style={{color:"#990011"}}>Contact Information</h3>
                        </Col>
                      </Row>
                      <br />
                      <Row>
                        <Col style={{ "text-align": "center" }}>
                          <h5>Fill up the details to reach out to us!</h5>
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  <Row className="contactInfoColumnItems">
                    <Col className="px-0 py-0 ml-3 my-0 mr-2" xs={1}>
                      <a href="tel:+91 9920338899" style={{ color: "black" }}>
                        <CallRoundedIcon style={{ color: "black" }} />
                      </a>
                    </Col>
                    <Col className="pl-0 py-0 pr-1">
                      <a href="tel:+91 9920338899" style={{ color: "black" }}>
                        +91&nbsp;9920338899
                      </a>
                    </Col>
                  </Row>

                  <Row className="contactInfoColumnItems">
                    <Col className="px-0 py-0 ml-3 my-0 mr-2" xs={1}>
                      <a
                        href="mailto:levinswitches@gmail.com"
                        style={{ color: "black" }}
                      >
                        <EmailRoundedIcon style={{ color: "black" }} />
                      </a>
                    </Col>
                    <Col className="pl-0 py-0 pr-1">
                      <a
                        href="mailto:levinswitches@gmail.com"
                        style={{ color: "black" }}
                      >
                        levinswitches@gmail.com
                      </a>
                    </Col>
                  </Row>

                  <Row className="contactInfoColumnItems">
                    <Col className="px-0 py-0 ml-3 my-0 mr-2" xs={1}>
                      <RoomIcon style={{ color: "black" }} />
                    </Col>
                    <Col className="pl-0 py-0 pr-1">
                      <a style={{ color: "black" }}>
                        Ritzy Industries, Gala No. 6&amp;7, Raj Prabha Mohan
                        Industrial Estate, Naikpada, Valiv, Vasai East, Thane,
                        Maharashtra - 401208
                      </a>
                    </Col>
                  </Row>
                  <br />
                  <br />
                  <Row className="contactInfoColumnIcons">
                    <Col className="icons">
                      <a href="https://www.facebook.com/levinswitches">
                        <FacebookIcon
                          className="social-media-contact"
                          style={{ color: "black", "font-size": "40pt" }}
                        />
                      </a>
                      <a href="https://www.instagram.com/levinswitches_india/">
                        <InstagramIcon
                          className="social-media-contact"
                          style={{ color: "black", "font-size": "40pt" }}
                        />
                      </a>
                    </Col>
                  </Row>
                </Col>
                {/* ROW 2 COL 2 */}
                <Col className="contactInputColumn pr-md-0">
                  <form noValidate autoComplete="off">
                    <Row className="contactFormRow">
                      <Col xs={12} lg={6} className="mb-sm-3 mb-3 mb-lg-0">
                        <Form.Row>
                          <TextField
                            label="Name"
                            variant="outlined"
                            color="primary"
                            onChange={this.checkName.bind(this)}
                            onFocus={this.dirtyName}
                            fullWidth
                          />
                        </Form.Row>
                        <Form.Row
                          style={{
                            display:
                              this.state.validName == -1 ||
                              this.state.validName == 2
                                ? "none"
                                : "",
                          }}
                        >
                          <span
                            className="contact-err-msg"
                            style={{
                              visibility: this.state.validName
                                ? "hidden"
                                : "visible",
                              padding: "0px 5px",
                            }}
                          >
                            Name must have only alphabets.
                          </span>
                        </Form.Row>
                      </Col>
                      <Col xs={12} lg={6}>
                        <Form.Row>
                          <PhoneInput
                            country={"us"}
                            inputClass={
                              this.state.phoneClassName + " contactPhoneInput " 
                            }
                            buttonClass={
                              this.state.phoneClassName + " dropdown-bg"
                            }
                            // value={this.state.phone}
                            onChange={(phone) => this.storePhone(phone)}
                            onFocus={this.colorAdd}
                            onBlur={this.colorRemove}
                            fullWidth
                          />
                        </Form.Row>
                      </Col>
                    </Row>
                    <Row className="contactFormRow">
                      <Col>
                        <Form.Row>
                          <TextField
                            label="Email"
                            variant="outlined"
                            color="primary"
                            onChange={this.checkEmail.bind(this)}
                            onFocus={this.dirtyEmailId}
                            fullWidth
                          />
                        </Form.Row>
                        <Form.Row
                          style={{
                            display:
                              this.state.validEmailId == -1 ||
                              this.state.validEmailId == 2
                                ? "none"
                                : "",
                          }}
                        >
                          <span
                            className="contact-err-msg"
                            style={{
                              visibility: this.state.validEmailId
                                ? "hidden"
                                : "visible",
                              padding: "0px 5px",
                            }}
                          >
                            Please enter a valid email id.
                          </span>
                        </Form.Row>
                      </Col>
                    </Row>
                    <Row className="contactFormRow">
                      <Col>
                        <Form.Row>
                          <TextField
                            label="Subject of Enquiry"
                            variant="outlined"
                            color="primary"
                            onChange={this.checkSubject.bind(this)}
                            onFocus={this.dirtySubject}
                            fullWidth
                          />
                        </Form.Row>
                        <Form.Row
                          style={{
                            display:
                              this.state.validSubject == -1 ||
                              this.state.validSubject == 2
                                ? "none"
                                : "",
                          }}
                        >
                          <span
                            className="contact-err-msg"
                            style={{
                              visibility: this.state.validSubject
                                ? "hidden"
                                : "visible",
                              padding: "0px 5px",
                            }}
                          >
                            Subject must not be empty.
                          </span>
                        </Form.Row>
                      </Col>
                    </Row>
                    <Row className="contactFormRow">
                      <Col>
                        <Form.Row>
                          <TextField
                            label="Enquiry (Optional)"
                            placeholder="Enter you message."
                            multiline
                            rows={4}
                            color="primary"
                            variant="outlined"
                            onChange={this.storeMessage.bind(this)}
                            fullWidth
                          />
                        </Form.Row>
                      </Col>
                    </Row>

                    <Row className="contactFormRow">
                      <Col className="formSubmitButton">
                        <MaterialBtn
                          variant="contained"
                          type="submit"
                          color="primary"
                          style={{
                            height: "50px",
                            width: "80px",
                            marginTop: "15px",
                          }}
                          disabled={
                            this.state.validEmailId *
                              this.state.validName *
                              this.state.validSubject ==
                            8
                              ? false
                              : true
                          }
                        >
                          Send
                        </MaterialBtn>
                      </Col>
                    </Row>
                  </form>
                </Col>
              </Row>
            </Row>
          </Row>
        </Container>

      </React.Fragment>
    );
  }
}

export default Contact;
