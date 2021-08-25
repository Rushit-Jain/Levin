import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import CallRoundedIcon from "@material-ui/icons/CallRounded";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import RoomIcon from "@material-ui/icons/Room";
import TextField from "@material-ui/core/TextField";
// import Icon from '@material-ui/core/Icon';
// import Button from '@material-ui/core/Button';

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name:"",
      emailId:"",
      subject:"",
      message:"",
      phone:"",
      validName:false,
      validEmailId: false,
      validSubject: false,
    }
  }

  checkName = (e) => {
    let name = e.target.value;
    if(name===""){
      this.setState({name:name, validName:false})
    }
    else if(name.match(/^[a-zA-Z\s]+$/)){
      this.setState({name:name, validName:true})
    }
    else{
      this.setState({validName:false})
    }
  }

  checkSubject = (e) => {
    let subject = e.target.value;
    if(subject===""){
      this.setState({subject:subject, validSubject:false})
    }
    else if(subject.match(/^[a-zA-Z\s]+$/)){
      this.setState({subject:subject, validSubject:true})
    }
    else{
      this.setState({validSubject:false})
    }
  }

  checkEmail = (e) => {
    let email = e.target.value;
    if(email===""){
      this.setState({emailId:email, validEmailId:false})
    }
    else if(email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)){
      this.setState({emailId:email, validEmailId:true})
    }
    else{
      this.setState({validEmailId:false})
    }
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
                  <Col style={{ "text-align": "center" }}>
                    <h4>Contact Information</h4>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col style={{ "text-align": "center" }}>
                    <h6>Fill up the details to reach out to us!</h6>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="contactInfoColumnItems">
              <Col className="px-0 py-0 ml-3 my-0 mr-2" xs={1}>
                <CallRoundedIcon style={{ color: "white" }} />
              </Col>
              <Col className="pl-0 py-0 pr-1" >
                <a href="tel:+91 9920338899" style={{ color: "white" }}>
                  +91&nbsp;9920338899
                </a>
              </Col>
            </Row>

            <Row className="contactInfoColumnItems">
              <Col className="px-0 py-0 ml-3 my-0 mr-2" xs={1}>
                <EmailRoundedIcon style={{ color: "white" }} />
              </Col>
              <Col className="pl-0 py-0 pr-1" >
                <a href="mailto:levin@gmail.com" style={{ color: "white" }}>
                  levinswitches@gmail.com
                </a>
              </Col>
            </Row>

            <Row className="contactInfoColumnItems">
              {/* <Col> */}
              <Col className="px-0 py-0 ml-3 my-0 mr-2" xs={1}>
                <RoomIcon style={{ color: "white" }} />
              </Col>
              <Col className="pl-0 py-0 pr-1" >
                <a style={{ color: "white" }}>
                  Ritzy Industries, Gala No. 6&amp;7, Raj Prabha Mohan
                  Industrial Estate, Naikpada, Valiv, Vasai East, Thane,
                  Maharashtra - 401208
                </a>
              </Col>
              {/* </Col> */}
            </Row>
            <br />
            <br />
            <Row className="contactInfoColumnIcons">
              <Col className="icons">
                <a href="https://www.facebook.com/levinswitches">
                  <FacebookIcon
                    style={{ color: "white", "font-size": "40pt" }}
                  />
                </a>
                <a href="https://www.instagram.com/levinswitches_india/">
                  <InstagramIcon
                    style={{ color: "white", "font-size": "40pt" }}
                  />
                </a>
              </Col>
            </Row>
          </Col>
          {/* ROW 2 COL 2 */}
          <Col className="contactInputColumn">
            <form noValidate autoComplete="off">
              <Row className="contactFormRow">
                <Col xs={12} lg={6} className="mb-sm-3 mb-3 mb-lg-0">
                  <TextField
                    label="Name"
                    variant="outlined"
                    color="primary"
                    onBlur={this.checkName.bind(this)}
                    fullWidth
                  />
                </Col>
                <Col xs={12} lg={6}>
                  <PhoneInput
                    country={"us"}
                    inputClass="contactPhoneInput"
                    // value={this.state.phone}
                    onChange={(phone) => console.log(phone)}
                  />
                </Col>
              </Row>
              <Row className="contactFormRow">
                <Col>
                  <TextField
                    label="Email"
                    variant="outlined"
                    color="primary"
                    onBlur={this.checkEmail.bind(this)}
                    fullWidth
                  />
                </Col>
              </Row>
              <Row className="contactFormRow">
                <Col>
                  <TextField
                    label="Subject of Enquiry"
                    variant="outlined"
                    color="primary"
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
                    color="primary"
                    variant="outlined"
                  />
                </Col>
              </Row>

              <Row className="contactFormRow">
                <Col className="formSubmitButton">
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
