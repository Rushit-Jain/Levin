import React from "react";
import { Row, Col } from "react-bootstrap";
import "./CategoryCard.css";

const CategoryCard = (props) => {
  return (
      <Col className={"products-category-card " + props.background} sm={{span:5}}>
        <p className="products-category-heading">{props.categoryName}</p>
      </Col>
  );
};

export default CategoryCard;
