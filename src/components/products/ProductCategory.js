import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import productsJumbotronImage from "../../assets/illustrations/products.svg";

const ProductCategory = (props) => {
  useEffect(() => {
    
  })
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
                src={productsJumbotronImage}
                style={{
                  background: "antiquewhite",
                  width: "80%",
                }}
              />
            </Col>
          </Col>
          <Col style={{ alignSelf: "center" }}>
            <h2 className="about-heading">{props.categoryName}</h2>
            <h6 className="products-subheading">
            {props.categoryName}
            </h6>
          </Col>
        </Row>
  );
};

export default ProductCategory;
