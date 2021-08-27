import React from "react";
import { Row, Col } from "react-bootstrap";
import "./CategoryCard.css";

const CategoryCard = (props) => {
  return (
    <Row className={"products-category-card " + props.background}>
      <Col>
        <h1>Switches</h1>
      </Col>
    </Row>
  );
};

export default CategoryCard;
