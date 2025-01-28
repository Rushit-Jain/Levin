import React, {Component} from 'react';
import axios from 'axios';
import { Row, Col, Container, Button } from "react-bootstrap";
import {Accordion, Card} from 'react-bootstrap';

class ProformaGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            incomingProductData: null,
            selectedProductData: [],
            quantity: [],
            range: [],
            discount: -1
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
        else if(!(classReference.state.quantity.filter(qty => qty < 0).length === 0) && (classReference.state.discount >= 0))
            alert("Quantity cannot be less than 0");
        else if((classReference.state.quantity.filter(qty => qty < 0).length === 0) && !(classReference.state.discount >= 0))
            alert("Discount cannot be empty or less than 0");
        else if(!(classReference.state.quantity.filter(qty => qty < 0).length === 0) && !(classReference.state.discount >= 0))
            alert("Quantity and discount cannot be less than 0");
        else
            alert("CORRECT");
    }
    handleDiscountChange (event) {
        if(event.target.value==="")
            this.setState({discount: -1});
        else
            this.setState({discount: event.target.value});
    }
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
                    <input type="number" placeholder="Enter Quantity" onChange={(event) => this.handleInputChange(this.state.incomingProductData[rangeName][data],rangeName,event)}/>
                </Col>
            </Row>
          )));
    }
    render() {
        let dorunRenderedList = <></>;
        let accessoriesRenderedList = <></>;
        let duraRenderedList = <></>;
        let ledRenderedList = <></>;
        if(this.state.incomingProductData!=undefined) {
            dorunRenderedList = this.generateListView('dorun');
            accessoriesRenderedList = this.generateListView('accessories');
            duraRenderedList = this.generateListView('dura');
            ledRenderedList = this.generateListView('led');
        }
        console.log(this.state.selectedProductData);
        console.log(this.state.quantity);
        console.log(this.state.discount);
        return (
            <>
        <Accordion defaultActiveKey="0">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                <h2 className="text-center">Dorun</h2>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body>{dorunRenderedList}</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                <h2 className="text-center">Accessories</h2>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                <Card.Body>{accessoriesRenderedList}</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                <h2 className="text-center">Dura</h2>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                <Card.Body>{duraRenderedList}</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                <h2 className="text-center">LED</h2>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                <Card.Body>{ledRenderedList}</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        <Container className="mt-5">
            <Row>
                <Col className="text-center my-auto col-12 col-md-6">
                    <h2>Discount</h2>
                    <input type="number" placeholder="Enter Discount %" onChange={(event) => this.handleDiscountChange(event)}/>
                </Col>
                <Col className="text-center my-auto col-12 col-md-6 p-5">
                    <Button onClick={(event) => this.handleSubmit(this)}>Generate Proforma</Button>
                </Col>
            </Row>
        </Container>
        </>
    );
    }
}

export default ProformaGenerator;