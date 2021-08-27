import React from "react";
import { Row, Col } from "react-bootstrap";
import "./CategoryCard.css";

const CategoryCard = (props) => {
  return (
    <Row className={"products-category-card " + props.background}>
      <Col>
        <span className="products-category-heading">{props.categoryName}</span>
      </Col>
    </Row>
  );
};

export default CategoryCard;
