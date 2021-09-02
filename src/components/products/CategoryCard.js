import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import "./CategoryCard.css";

const CategoryCard = (props) => {
  return (
    <Col sm={{ span: 5 }} onClick={() => props.onClick(props.categoryName)}>
      <Link sm={{ span: 5 }}
        className={"products-category-card " + props.background}
        to={`/products/${props.range}/${props.categoryCode}`}
      >
        <Col>
          <p className="products-category-heading">{props.categoryName}</p>
        </Col>
      </Link>
    </Col>
  );
};

export default withRouter(CategoryCard);
