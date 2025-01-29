import React, {Component} from 'react';
import axios from 'axios';
import { Row, Col, Container, Button } from "react-bootstrap";
import {Accordion, Card, DropdownButton, Dropdown} from 'react-bootstrap';
import "./ProformaGenerator.css";
import logo from "../../assets/print_logo.png";

class ProformaGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            incomingProductData: null,
            selectedProductData: [],
            quantity: [],
            range: [],
            discount: -1,
            cashDiscount: 0,
            cashDiscountLocation: "Cash Discount",
            isGenerated: false,
            total: 0
        };
    }
    componentDidMount() {
        axios
          .get(
            `https://levin-e1c22-default-rtdb.firebaseio.com/proforma-db.json`
          )
          .then((res) => this.setState({ incomingProductData: res.data }));
    }
    isInputValid = (value) => (!isNaN(value.trim()) && value.trim()>0);
    handleSubmit(classReference) {
        if(classReference.state.quantity.length === 0)
            alert("No products selected");
        else if(!(classReference.state.quantity.filter(qty => qty < 0).length === 0))
            alert("Quantity cannot be less than 0");
        else if(!(classReference.state.discount >= 0))
            alert("Discount cannot be empty or less than 0");
        else if(classReference.state.cashDiscountLocation == "Cash Discount")
            alert("Please select when to reduce cash discount from dropdown menu");
        else if(!(classReference.state.cashDiscountLocation == "Cash Discount" || classReference.state.cashDiscountLocation == "Not Applicable") && !(classReference.state.cashDiscount > 0))
            alert("Please enter valid cash discount value");
        else if(!(classReference.state.cashDiscount >= 0))
            alert("Cash Discount cannot be less than 0");
        else
            this.setState({isGenerated: true});
    }
    handleDiscountChange (event) {
        if(event.target.value==="")
            this.setState({discount: -1});
        else
            this.setState({discount: event.target.value});
    }
    handleCashDiscountChange (event) {
        if(event.target.value==="")
            this.setState({cashDiscount: 0});
        else
            this.setState({cashDiscount: event.target.value});
    }
    handleCashDiscountLocation = (location) => this.setState({cashDiscountLocation: location});
    handleInputChange(product,rangeName,event) {
        if(this.isInputValid(event.target.value) && !this.state.selectedProductData.includes(product)) {
            let newSelectedProductData = [...this.state.selectedProductData,product];
            let newQuantity = [...this.state.quantity,event.target.value];
            let newRange = [...this.state.range,rangeName];
            this.setState({selectedProductData: newSelectedProductData, quantity: newQuantity, range: newRange});
        }
        else if(this.isInputValid(event.target.value) && this.state.selectedProductData.includes(product)) {
            let index = this.state.selectedProductData.indexOf(product);
            let newQuantity = [...this.state.quantity];
            newQuantity[index] = event.target.value;
            this.setState({quantity: newQuantity});
        }
        else if(!this.isInputValid(event.target.value) && this.state.selectedProductData.includes(product)) {
            let newSelectedProductData = [...this.state.selectedProductData];
            let newQuantity = [...this.state.quantity];
            let newRange = [...this.state.range];
            let index = this.state.selectedProductData.indexOf(product);
            newSelectedProductData.splice(index,1);
            newQuantity.splice(index,1);
            newRange.splice(index,1);
            this.setState({quantity: newQuantity, selectedProductData: newSelectedProductData, range: newRange});
        }
    }
    generateListView(rangeName) {
        return (Object.keys(this.state.incomingProductData[rangeName]).map((data) => (
            <Row className="px-0 px-sm-4 mb-5 justify-content-center" key={data}>
                <Col className="col-md-6 col-12 text-center">
                    {this.state.incomingProductData[rangeName][data]['name']}
                </Col>
                <Col className="text-center">
                    <input type="number" value={this.state.selectedProductData.indexOf(this.state.incomingProductData[rangeName][data]) === -1 ? "" : this.state.quantity[this.state.selectedProductData.indexOf(this.state.incomingProductData[rangeName][data])]} placeholder="Enter Quantity" onChange={(event) => this.handleInputChange(this.state.incomingProductData[rangeName][data],rangeName,event)}/>
                </Col>
            </Row>
          )));
    }
    render() {
        let dorunRenderedList = <></>;
        let accessoriesRenderedList = <></>;
        let doricRenderedList = <></>;
        let doricGreyRenderedList = <></>;
        let doricBlackRenderedList = <></>;
        let dolbyRenderedList = <></>;
        let dolbyGreyRenderedList = <></>;
        let dolbyBlackRenderedList = <></>;
        let duraRenderedList = <></>;
        let ledRenderedList = <></>;
        let generatedList = <></>;
        let beforeGST = <></>;
        let afterGST = <></>;
        let basicTotal = 0;
        let grandTotal = 0;
        let gst = 0;
        let cd = 0;
        if(this.state.incomingProductData!=undefined) {
            dorunRenderedList = this.generateListView('dorun');
            accessoriesRenderedList = this.generateListView('accessories');
            doricRenderedList = this.generateListView('doric');
            doricGreyRenderedList = this.generateListView('doric grey');
            doricBlackRenderedList = this.generateListView('doric black');
            dolbyRenderedList = this.generateListView('dolby');
            dolbyGreyRenderedList = this.generateListView('dolby grey');
            dolbyBlackRenderedList = this.generateListView('dolby black');
            duraRenderedList = this.generateListView('dura');
            ledRenderedList = this.generateListView('led');
        }
        let inputDetails = (<>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    <h2 className="text-center">Doric</h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>{doricRenderedList}</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    <h2 className="text-center">Doric Black</h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>{doricBlackRenderedList}</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                    <h2 className="text-center">Doric Grey</h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>{doricGreyRenderedList}</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                    <h2 className="text-center">Dolby</h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>{dolbyRenderedList}</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                    <h2 className="text-center">Dolby Black</h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                    <Card.Body>{dolbyBlackRenderedList}</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="5">
                    <h2 className="text-center">Dolby Grey</h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                    <Card.Body>{dolbyGreyRenderedList}</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="6">
                    <h2 className="text-center">Dorun</h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6">
                    <Card.Body>{dorunRenderedList}</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="7">
                    <h2 className="text-center">Accessories</h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="7">
                    <Card.Body>{accessoriesRenderedList}</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="8">
                    <h2 className="text-center">Dura</h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="8">
                    <Card.Body>{duraRenderedList}</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="10">
                    <h2 className="text-center">LED</h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="10">
                    <Card.Body>{ledRenderedList}</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <Container className="mt-5">
                <Row>
                    <Col className="text-center my-auto col-12 col-md-6 p-3">
                        <h2>Discount</h2>
                        <input type="number" value={this.state.discount !== -1 ? this.state.discount : ""} placeholder="Enter Discount %" onChange={(event) => this.handleDiscountChange(event)}/>
                    </Col>
                    <Col className="text-center my-auto col-12 col-md-6 p-3">
                        <h2>Cash Discount</h2>
                        <DropdownButton className="p-2" id="dropdown-item-button" title={this.state.cashDiscountLocation} variant="secondary">
                            <Dropdown.Item as="button" onClick={(event) => this.handleCashDiscountLocation("Before GST")}>Before GST</Dropdown.Item>
                            <Dropdown.Item as="button" onClick={(event) => this.handleCashDiscountLocation("After GST")}>After GST</Dropdown.Item>
                            <Dropdown.Item as="button" onClick={(event) => this.handleCashDiscountLocation("Not Applicable")}>Not Applicable</Dropdown.Item>
                        </DropdownButton>
                        <input type="number" value={this.state.cashDiscount !== 0 ? this.state.cashDiscount : ""} placeholder="Enter Cash Discount %" onChange={(event) => this.handleCashDiscountChange(event)}/>
                    </Col>
                </Row>
                <Row>
                <Col className="text-center my-auto pt-5">
                        <Button onClick={(event) => this.handleSubmit(this)}>Generate Proforma</Button>
                    </Col>
                </Row>
            </Container>
            </>);
        if(this.state.isGenerated) {
            generatedList = this.state.selectedProductData.map((product,index) => {
                let rate = (product.list * (1 - (this.state.discount/100)) / 1.18).toFixed(2);
                let total = (rate * this.state.quantity[index]).toFixed(2);
                grandTotal += +total;
                return(
                    <Row>
                        <Col className="p-2 py-auto text-center" style={{border: "1px black solid"}}>{this.state.range[index].toUpperCase() + " " + product.name}</Col>
                        <Col className="p-2 py-auto text-center" style={{border: "1px black solid"}}>{this.state.quantity[index]} pcs</Col>
                        <Col className="p-2 py-auto text-center" style={{border: "1px black solid"}}>Rs. {rate}</Col>
                        <Col className="p-2 py-auto text-center" style={{border: "1px black solid"}}>Rs. {total}</Col>
                    </Row>
                );
            });
            basicTotal = +(grandTotal).toFixed(2);
            if(this.state.cashDiscountLocation == "Before GST") {
                cd = +(grandTotal * this.state.cashDiscount / 100).toFixed(2);
                gst = +((grandTotal - cd) * 18 / 100).toFixed(2);
                beforeGST = (
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col className="p-2" style={{border: "1px black solid"}}><h4 style={{color: "green"}}>Cash Discount @ {this.state.cashDiscount}%</h4></Col>
                        <Col className="p-2" style={{border: "1px black solid"}}><h4 style={{color: "green"}}>-Rs. {cd}</h4></Col>
                    </Row>
                );
            }
            else if(this.state.cashDiscountLocation == "After GST") {
                gst = +(grandTotal * 18 / 100).toFixed(2);
                cd = +((grandTotal + gst) * this.state.cashDiscount / 100).toFixed(2);
                afterGST = (
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col className="p-2" style={{border: "1px black solid"}}><h4 style={{color: "green"}}>Cash Discount @ {this.state.cashDiscount}%</h4></Col>
                        <Col className="p-2" style={{border: "1px black solid"}}><h4 style={{color: "green"}}>-Rs. {cd}</h4></Col>
                    </Row>
                );
            }
            else {
                gst = +(grandTotal * 18 / 100).toFixed(2);
            }
            grandTotal = Math.round(grandTotal - cd + gst);
        }
        let generatedProforma = (
            <>
            <Container ref={this.props.printReference} className="text-center mt-5 mb-5" style={{overflow: "auto", width: "1200px", fontFamily: "Arial", background: `linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.8)), url(${logo})`, backgroundRepeat: "repeat-y", backgroundSize: "contain", backgroundPosition: "center center"}}>
                <Row>
                    <Col className="text-center">
                        <h1 style={{fontWeight: "bold", fontFamily: "BonaNovaSCFont", textDecoration: "underline", color: "red"}}>LEVIN SWITCHES</h1>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col className="text-center">
                        <h1 style={{fontWeight: "bold", fontFamily: "BonaNovaSCFont", textDecoration: "underline"}}>Proforma</h1>
                    </Col>
                </Row>
                <Row>
                    <Col><h3 style={{textDecoration: "underline"}}>Item</h3></Col>
                    <Col><h3 style={{textDecoration: "underline"}}>Quantity</h3></Col>
                    <Col><h3 style={{textDecoration: "underline"}}>Rate</h3></Col>
                    <Col><h3 style={{textDecoration: "underline"}}>Total</h3></Col>
                </Row>
                {generatedList}
                <br />
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col className="p-2" style={{border: "1px black solid"}}><h4>Basic Total</h4></Col>
                    <Col className="p-2" style={{border: "1px black solid"}}><h4>Rs. {basicTotal}</h4></Col>
                </Row>
                {beforeGST}
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col className="p-2" style={{border: "1px black solid"}}><h4 style={{color: "red"}}>GST @ 18%</h4></Col>
                    <Col className="p-2" style={{border: "1px black solid"}}><h4 style={{color: "red"}}>Rs. {gst}</h4></Col>
                </Row>
                {afterGST}
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col className="p-2" style={{border: "1px black solid"}}><h4>Grand Total</h4></Col>
                    <Col className="p-2" style={{border: "1px black solid"}}><h4>Rs. {grandTotal}</h4></Col>
                </Row>
            </Container>
            <Container>
                <Row>
                <Col className="text-left my-auto pt-5">
                        <Button variant="info" onClick={(event) => this.setState({isGenerated: false})}>Back</Button>
                    </Col>
                    <Col className="text-right my-auto pt-5">
                        <Button variant="success" onClick={this.props.printHandler}>Download PDF</Button>
                    </Col>
                </Row>
            </Container>
            </>
        );
        console.log(this.state.selectedProductData);
        console.log(this.state.quantity);
        console.log(this.state.discount);
        console.log(grandTotal)
        return (
            this.state.isGenerated ? generatedProforma : inputDetails
    );
    }
}

export default ProformaGenerator;