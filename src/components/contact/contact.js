import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import "./contact.css";

class Contact extends Component{

    constructor(props){
        super(props);
    }

    render() {
        return(
            <Container className="contactbox">
                <Row className="contactbox_row1">
                    <Col>
                        <h2>Contact Us</h2> 
                        <h5>Any questions or remarks? Write us a message!</h5>
                    </Col>
                </Row>
                <Row className="contactbox_row2">

                    <Col className="contactInfoColumn">
                        <Row>
                            <Col>
                                Contact Information
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <a href="tel:+91 8356957376"><CallRoundedIcon style={{color:"lightgreen"}}/>+91 XXXXXXXX45</a>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <a href="mailto:levin@gmail.com" ><EmailRoundedIcon style={{color:"gray"}}/> prjangid27@gmail.com</a>
                            </Col>
                        </Row>
                    </Col>

                    <Col>

                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Contact;