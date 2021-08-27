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

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRange: "dolby",
    };
  }

  handleRangeChange = (range) => this.setState({ selectedRange: range });

  render() {
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
              onClick={() => this.handleRangeChange("dolby")}
              height="100px"
              width="200px"
              alt="Dolby"
              src={
                this.state.selectedRange === "dolby" ? closed_dolby : open_dolby
              }
            />
            <img
              onClick={() => this.handleRangeChange("doric")}
              height="100px"
              width="200px"
              alt="Doric"
              src={
                this.state.selectedRange === "doric" ? closed_doric : open_doric
              }
            />
            <img
              onClick={() => this.handleRangeChange("dorun")}
              height="100px"
              width="200px"
              alt="Dorun"
              src={
                this.state.selectedRange === "dorun" ? closed_dorun : open_dorun
              }
            />
            <img
              onClick={() => this.handleRangeChange("accessories")}
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
              onClick={() => this.handleRangeChange("mcb")}
              height="100px"
              width="200px"
              alt="MCB"
              src={this.state.selectedRange === "mcb" ? closed_mcb : open_mcb}
            />
          </Row>
        </Container>
        <CategoryCard
          categoryName="AC &amp; Geyser Box"
          background="products-category-bg-1"
        />
        <CategoryCard
          categoryName="LED &amp; Hotel Accessories"
          background="products-category-bg-2"
        />
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
      </>
    );
  }
}

export default Products;
