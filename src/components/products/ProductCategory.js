import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import dolby from "../../assets/illustrations/products_dolby.svg";
import doric from "../../assets/illustrations/products_doric.svg";
import dorun from "../../assets/illustrations/products_dorun.svg";
import accessories from "../../assets/illustrations/products_accessories.svg";
import mcb from "../../assets/illustrations/products_mcb.svg";
import "./ProductCategory.css";

const ProductCategory = (props) => {
  useEffect(() => {
    if (
      props.range == undefined ||
      props.categoryName == undefined ||
      props.category == undefined
    )
      props.history.push("/products/dolby");
    // axios
    //   .get("https://levin-e1c22-default-rtdb.firebaseio.com/contact.json", {
    //     hello: "hi",
    //   })
    //   .then((value) => console.log(value));
  });
  return (
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
              props.range === "dolby"
                ? dolby
                : props.range === "doric"
                ? doric
                : props.range === "dorun"
                ? dorun
                : props.range === "accessories"
                ? accessories
                : mcb
            }
            className={
              props.range === "doric"
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
            props.range === "mcb"
              ? "product-category-mcb-heading"
              : "product-category-heading"
          }
        >
          {props.range}
        </h2>
        <h6 className="products-subheading">{props.categoryName}</h6>
      </Col>
    </Row>
  );
};

export default withRouter(ProductCategory);
