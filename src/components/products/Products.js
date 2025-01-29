import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./Products.css";
import CategoryCard from "./CategoryCard";
import open_doric from "../../assets/product_buttons/open_doric.svg";
import open_dorun from "../../assets/product_buttons/open_dorun.svg";
import open_dolby from "../../assets/product_buttons/open_dolby.svg";
import open_mcb from "../../assets/product_buttons/open_mcb.svg";
import open_led from "../../assets/product_buttons/open_led.svg";
import open_dura from "../../assets/product_buttons/open_dura.svg";
import open_accessories from "../../assets/product_buttons/open_accessories.svg";
import closed_doric from "../../assets/product_buttons/closed_doric.svg";
import closed_dorun from "../../assets/product_buttons/closed_dorun.svg";
import closed_dolby from "../../assets/product_buttons/closed_dolby.svg";
import closed_mcb from "../../assets/product_buttons/closed_mcb.svg";
import closed_led from "../../assets/product_buttons/closed_led.svg";
import closed_dura from "../../assets/product_buttons/closed_dura.svg";
import closed_accessories from "../../assets/product_buttons/closed_accessories.svg";
import productsJumbotronImage from "../../assets/illustrations/products.svg";

const categoryCodes = {
  doric: [
    "switches",
    "sockets",
    "ancilaries",
    "dimmers-fan-regulators",
    "bell-led-hotel-series",
    "motor-starters-tiny-mcb-ac-geyser-box",
    "switch-plate",
    "surface-concealed-box",
  ],
  dolby: [
    "switches",
    "sockets",
    "dimmers-fan-regulators",
    "ancillaries",
    "fuse-tiny-mcb-blank-module",
    "bell-led-hotel-series",
    "switch-plates",
  ],
  dorun: [
    "switches",
    "sockets",
    "dimmers-fan-regulators",
    "fuse-mcb",
    "dp-switch",
    "ss-combined",
  ],
  accessories: [
    "ceiling-rose",
    "lamp-holders",
    // "plug-tops-bed-switch",
    "conversion-multi-plugs",
    "door-bells",
    "ceiling-plates",
    // "power-strip",
    "modular-blank-plates"
  ],
  mcb: ["mcb", "isolator", "changeover", "rccb", "distribution-box"],
  led: ["led-panels","flood-light","street-light"],
  dura: ["modular-type", "screw-type"]
};

const categories = {
  doric: [
    "Switches",
    "Sockets",
    "Ancillaries",
    "Dimmers & Fan Regulators",
    "Bell, LED & Hotel Series",
    "Motor Starters, Tiny MCBs & AC & Geyser Box",
    "Switch Plates",
    "Surface & Concealed Box",
  ],
  dolby: [
    "Switches",
    "Sockets",
    "Dimmers & Fan Regulators",
    "Ancillaries",
    "Fuse, Tiny MCB & Blank Module",
    "Bell, LED & Hotel Series",
    "Switch Plates",
  ],
  dorun: [
    "Switches",
    "Sockets",
    "Dimmers & Fan Regulators",
    "Ancillaries",
    "Double Pole Switches",
    "Switch & Socket Combined",
  ],
  mcb: [
    "Miniature Circuit Breakers",
    "Isolator",
    "Changeover",
    "Residual Current Circuit Breakers",
    "Distribution Box"
  ],
  accessories: [
    "Ceiling Rose",
    "Lamp Holders",
    // "Plug Tops & Bed Switch",
    "Conversion & Multi Plugs",
    "Door Bells",
    "Ceiling plates",
    // "Power Strip",
    "Modular Blank Plates"
  ],
  led: [
    "LED Panels",
    "Flood Light",
    "Street Light"
  ],
  dura: ["Modular Type", "Screw Type"]
};

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRange:
        window.location.pathname.split("/")[
          window.location.pathname.split("/").length - 1
        ] === "dolby"
          ? "dolby"
          : window.location.pathname.split("/")[
              window.location.pathname.split("/").length - 1
            ],
    };
  }

  handleRangeChange = (range) => this.setState({ selectedRange: range });

  render() {
    let categoriesLayout = [];
    let classIndex = 0;
    for (
      let i = 0;
      i < categories[this.state.selectedRange].length;
      i = i + 2
    ) {
      classIndex = classIndex % 5;
      if (
        categories[this.state.selectedRange].length % 2 !== 0 &&
        i === categories[this.state.selectedRange].length - 1
      ) {
        categoriesLayout.push(
          <Row className="product-category-row">
            <CategoryCard
              onClick={this.props.changeSelectedCategoryName}
              categoryCode={categoryCodes[this.state.selectedRange][i]}
              range={this.state.selectedRange}
              categoryName={categories[this.state.selectedRange][i]}
              background={"products-category-bg-" + classIndex}
            />
          </Row>
        );
        classIndex += 1;
      } else {
        categoriesLayout.push(
          <Row className="product-category-row">
            <CategoryCard
              onClick={this.props.changeSelectedCategoryName}
              categoryCode={categoryCodes[this.state.selectedRange][i]}
              range={this.state.selectedRange}
              categoryName={categories[this.state.selectedRange][i]}
              background={"products-category-bg-" + classIndex}
            />
            <CategoryCard
              onClick={this.props.changeSelectedCategoryName}
              categoryCode={categoryCodes[this.state.selectedRange][i + 1]}
              range={this.state.selectedRange}
              categoryName={categories[this.state.selectedRange][i + 1]}
              background={"products-category-bg-" + (classIndex + 1)}
            />
          </Row>
        );
        classIndex += 2;
      }
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
                alt="product"
                style={{
                  background: "antiquewhite",
                  width: "80%",
                }}
              />
            </Col>
          </Col>
          <Col style={{ alignSelf: "center" }}>
            <h2 className="about-heading product-category-title">Products</h2>
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
              onClick={() => {
                this.handleRangeChange("dolby");
                this.props.history.push("/products/dolby");
              }}
              height="100px"
              width="200px"
              alt="Dolby"
              src={
                this.state.selectedRange === "dolby" ? closed_dolby : open_dolby
              }
            />
            <img
              onClick={() => {
                this.handleRangeChange("doric");
                this.props.history.push("/products/doric");
              }}
              height="100px"
              width="200px"
              alt="Doric"
              src={
                this.state.selectedRange === "doric" ? closed_doric : open_doric
              }
            />
            <img
              onClick={() => {
                this.handleRangeChange("dura");
                this.props.history.push("/products/dura");
              }}
              height="100px"
              width="200px"
              alt="DURA"
              src={
                this.state.selectedRange === "dura" ? closed_dura : open_dura
              }
            />
            <img
              onClick={() => {
                this.handleRangeChange("dorun");
                this.props.history.push("/products/dorun");
              }}
              height="100px"
              width="200px"
              alt="Dorun"
              src={
                this.state.selectedRange === "dorun" ? closed_dorun : open_dorun
              }
            />
            <img
              onClick={() => {
                this.handleRangeChange("accessories");
                this.props.history.push("/products/accessories");
              }}
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
              onClick={() => {
                this.handleRangeChange("mcb");
                this.props.history.push("/products/mcb");
              }}
              height="100px"
              width="200px"
              alt="MCB"
              src={this.state.selectedRange === "mcb" ? closed_mcb : open_mcb}
            />
            <img
              onClick={() => {
                this.handleRangeChange("led");
                this.props.history.push("/products/led");
              }}
              height="100px"
              width="200px"
              alt="LED"
              src={
                this.state.selectedRange === "led" ? closed_led : open_led
              }
            />
          </Row>
        </Container>
        {categoriesLayout}
      </>
    );
  }
}

export default withRouter(Products);
