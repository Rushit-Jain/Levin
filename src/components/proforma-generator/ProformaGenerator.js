import React, {Component} from 'react';
import axios from 'axios';
import { Row, Col, Container } from "react-bootstrap";
import {Accordion, Card} from 'react-bootstrap';

class ProformaGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            incomingProductData: null,
            selectedProductData: [],
            quantity: [],
            range: []
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
        console.log(this.state.range);
        return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                <h2>Dorun</h2>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body>{dorunRenderedList}</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                <h2>Accessories</h2>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                <Card.Body>{accessoriesRenderedList}</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                <h2>Dura</h2>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                <Card.Body>{duraRenderedList}</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                <h2>LED</h2>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                <Card.Body>{ledRenderedList}</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
    }
}

export default ProformaGenerator;