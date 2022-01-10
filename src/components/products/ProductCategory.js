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
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    if (
      this.props.range == undefined ||
      this.props.categoryName == undefined ||
      this.props.category == undefined
    )
      this.props.history.push("/products/dolby");

    axios
      .get(
        `https://levin-e1c22-default-rtdb.firebaseio.com/products/${this.props.range}/${this.props.category}.json`
      )
      .then((res) => this.setState({ data: res.data }));
  }

  render() {
    // console.log(this.state.data);
    let subcategoryExists = false;
    let organizedData = {};

    // to check if there is subcategory
    if (this.state.data) {
      this.state.data[Object.keys(this.state.data)[0]].subcategory
        ? (subcategoryExists = true)
        : (subcategoryExists = false);
    }

    // if subcategory exists then to organize the data
    if (subcategoryExists) {
      Object.keys(this.state.data).map((pr) => {
        if (
          Object.keys(organizedData).includes(this.state.data[pr].subcategory)
        ) {
          organizedData[this.state.data[pr].subcategory].push(
            this.state.data[pr]
          );
        } else {
          organizedData[this.state.data[pr].subcategory] = [
            this.state.data[pr],
          ];
        }
      });
    }

    let productsRender = this.state.data ? (
      !subcategoryExists ? (
        Object.keys(this.state.data).map((pr) => (
          <Col style={{ marginBottom: "15vh" }} className="px-0 px-sm-4">
            <Product data={this.state.data[pr]} range={this.props.range} />
          </Col>
        ))
      ) : (
        Object.keys(organizedData).map((subcategoryName) => {
          let productsOfSubcategory = [];
          productsOfSubcategory.push(
            <Col xs={12} className="productCategory-subcategory-heading">
              <p>{subcategoryName}</p>
            </Col>
          );
          organizedData[subcategoryName].map((pr) =>
            productsOfSubcategory.push(
              <Col style={{ marginBottom: "15vh" }} className="px-0 px-sm-4">
                <Product data={pr} range={this.props.range} />
              </Col>
            )
          );
          return productsOfSubcategory;
        })
      )
    ) : (
      <>Loading...</>
    );

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
                alt="product"
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
                  : "product-category-heading product-category-title"
              }
            >
              {this.props.range}
            </h2>
            <h6 className="products-subheading">{this.props.categoryName}</h6>
          </Col>
        </Row>
        <Container style={{ marginBottom: "50px" }}>
          <Row style={{ margin: 0 }}>
            {/* <Row>
              <Col>
                SUBCATEGORY
              </Col>
            </Row> */}

            <Row className="product-individual-row" style={{ padding: 0 }}>
              {productsRender}
              {/* <Col style={{ marginBottom: "30vh" }} className="px-0 px-sm-4">
                <Product />
              </Col>
              <Col style={{ marginBottom: "30vh" }} className="px-0 px-sm-4">
                <Product />
              </Col>
              <Col style={{ marginBottom: "30vh" }} className="px-0 px-sm-4">
                <Product />
              </Col> */}
            </Row>
          </Row>
        </Container>
      </>
    );
  }
}

export default withRouter(ProductCategory);
