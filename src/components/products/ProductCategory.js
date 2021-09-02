import React, { useEffect, useState, Component } from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import dolby from "../../assets/illustrations/products_dolby.svg";
import doric from "../../assets/illustrations/products_doric.svg";
import dorun from "../../assets/illustrations/products_dorun.svg";
import accessories from "../../assets/illustrations/products_accessories.svg";
import mcb from "../../assets/illustrations/products_mcb.svg";
import "./ProductCategory.css";
import Product from "./Product";


class ProductCategory extends Component {

    constructor(props){
      super(props);
      this.state={
        data: null
      }
    }

    componentDidMount(){
      if (
        this.props.range == undefined ||
        this.props.categoryName == undefined ||
        this.props.category == undefined
      )
  
      this.props.history.push("/products/dolby");
  
      axios
        .get("https://levin-e1c22-default-rtdb.firebaseio.com/products/dolby/ancillaries.json")
        .then((res) => this.setState({data:res.data}));
    }
    render(){
      console.log(this.state.data);
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
                src={
                  this.props.range === "dolby"
                    ? dolby
                    : this.props.range === "doric"
                    ? doric
                    : this.props.range === "dorun"
                    ? dorun
                    : this.props.range === "accessories"
                    ? accessories
                    : mcb
                }
                className={
                  this.props.range === "doric"
                    ? "product-doric-animated product-doric-fadeIn"
                    : ""
                }
                style={{
                  background: "antiquewhite",
                  width: "80%",
                }}
              />
            </Col>
          </Col>
          <Col style={{ alignSelf: "center" }}>
            <h2
              className={
                this.props.range === "mcb"
                  ? "product-category-mcb-heading"
                  : "product-category-heading"
              }
            >
              {this.props.range}
            </h2>
            <h6 className="products-subheading">{this.props.categoryName}</h6>
          </Col>
        </Row>
        <Container>
          <Row style={{margin:0,marginBottom: "50px",padding:0}}>
              <Row>
                <Col>
                    SUBCATEGORY
                </Col>
              </Row>
              <Row className="product-individual-row">
                <Col st>
                    <Product/>
                </Col>
                <Col >
                    <Product/>
                </Col>
                <Col >
                    <Product/>
                </Col>
                
              </Row>
          </Row>
        </Container>
        </>
      );

    }
    
};

export default withRouter(ProductCategory);
