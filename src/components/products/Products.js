import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Products.css";
import CategoryCard from "./CategoryCard";
import open_doric from "../../assets/product_buttons/open_doric.svg";
import open_dorun from "../../assets/product_buttons/open_dorun.svg";
import open_dolby from "../../assets/product_buttons/open_dolby.svg";
import open_mcb from "../../assets/product_buttons/open_mcb.svg";
import open_accessories from "../../assets/product_buttons/open_accessories.svg";
import closed_doric from "../../assets/product_buttons/closed_doric.svg";
import closed_dorun from "../../assets/product_buttons/closed_dorun.svg";
import closed_dolby from "../../assets/product_buttons/closed_dolby.svg";
import closed_mcb from "../../assets/product_buttons/closed_mcb.svg";
import closed_accessories from "../../assets/product_buttons/closed_accessories.svg";
import productsJumbotronImage from "../../assets/illustrations/products.svg";

import {useHistory} from 'react-router-dom';

const categories = {
  'doric':[ "Switches", "Sockets", "Ancillaries", "Dimmers & Fan Regulators", "LED Light", "Bell, LED & Hotel Series", "Motor Starters & Tiny MCBs"
          , "AC & Geyser Box", "Switch Plates", "Surface & Concealed Box"],
  'dolby':[ "Switches", "Sockets", "Dimmers & Fan Regulators", "Ancillaries", "Fuse, Tiny MCB & Blank Module"
          , "Bell, LED & Hotel Series", "Switch Plates" ],
  'dorun':[ "Switches", "Sockets", "Dimmers & Fan Regulators", "Fuse, T.V. Socket & Telephone Jack", "Double Pole Switches", "Switch & Socket Combined"
          , "5 in 1" ],
  'mcb':[ "Single Pole C Type", "Double Pole C Type", "Triple Pole C Type", "Four Pole & Neutral C Type", "Isolator", "Single Pole & Neutral C Type"
          , "Triple Pole & Neutral C Type", "Changeover", "RCCB" ],
  'accessories':[ "Ceiling Rose", "Lamp Holders", "Plug Tops & Bed Switch", "Conversion & Multi Plugs", "Door Bells", "Surface Box & Ceiling plates"
          , "Power Strip" ]
}

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRange: "dolby",
    };
  }

  handleRangeChange = (range) => this.setState({ selectedRange: range });

  render() {

    let categoriesLayout = []
    for(i=0;i<categories['dolby'].length;i=i+2){
      
      categoriesLayout.push(
      <Row className="product-category-row">
        <CategoryCard
          categoryName={categories['dolby'][i]}
          background="products-category-bg-4"
        />
        {
          i % 2 !== 0 ?
          <CategoryCard
            categoryName={categories['dolby'][i+1]}
            background="products-category-bg-2"
          /> :
          <div></div>
        }  
          
      </Row>
      )
    }

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
                src={productsJumbotronImage}
                style={{ background: "antiquewhite", width: "80%" }}
              />
            </Col>
          </Col>
          <Col style={{ alignSelf: "center" }}>
            <h2 className="about-heading">Products</h2>
            <h6 className="products-subheading">
              We assure you safety &amp; quality
            </h6>
          </Col>
        </Row>
        <Container>
          <Row
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap: "20px",
            }}
          >
            <img
              onClick={() => {this.handleRangeChange("dolby") ; this.props.history.push("/products/dolby") ;  }}
              height="100px"
              width="200px"
              alt="Dolby"
              src={
                this.state.selectedRange === "dolby" ? closed_dolby : open_dolby
              }
            />
            <img
              onClick={() => {this.handleRangeChange("doric") ; this.props.history.push("/products/doric") }}
              height="100px"
              width="200px"
              alt="Doric"
              src={
                this.state.selectedRange === "doric" ? closed_doric : open_doric
              }
            />
            <img
              onClick={() => {this.handleRangeChange("dorun") ; this.props.history.push("/products/dorun") }}
              height="100px"
              width="200px"
              alt="Dorun"
              src={
                this.state.selectedRange === "dorun" ? closed_dorun : open_dorun
              }
            />
            <img
              onClick={() => {this.handleRangeChange("accessories") ; this.props.history.push("/products/accessories") }}
              height="100px"
              width="200px"
              alt="Accessories"
              src={
                this.state.selectedRange === "accessories"
                  ? closed_accessories
                  : open_accessories
              }
            />
            <img
              onClick={() => {this.handleRangeChange("mcb") ; this.props.history.push("/products/mcb") }}
              height="100px"
              width="200px"
              alt="MCB"
              src={this.state.selectedRange === "mcb" ? closed_mcb : open_mcb}
            />
          </Row>
        </Container>
        <>
        {
          categoriesLayout
        }
        </>
          {/* <Row className="product-category-row">
                  <CategoryCard
                    categoryName="AC &amp; Geyser Box"
                    background="products-category-bg-1"
                  />
                  <CategoryCard
                    categoryName="LED &amp; Hotel Accessories"
                    background="products-category-bg-2"
                  />
          </Row>
          <Row className="product-category-row">
            <CategoryCard
              categoryName="Motor Starters"
              // categoryName={[
              //   "Motor Starters",
              //   <br />,
              //   <br />,
              //   "Tiny MCB",
              //   <br />,
              //   <br />,
              //   "AC & Geyser Box",
              // ]}
              background="products-category-bg-3"
            />
            <CategoryCard
              categoryName="LED &amp; Hotel Accessories"
              background="products-category-bg-2"
            />
          </Row> */}
      </>
    );
  }
}

//  console.log(this.props.history.location.pathname)

export default Products;
