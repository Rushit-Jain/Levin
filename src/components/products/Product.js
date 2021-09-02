import React from "react";
import Goo from "gooey-react";
import { Row, Col } from "react-bootstrap";
import "./Product.css";
import pic_svg from "../../assets/pic.svg";

function Product(props) {
  return (
    <div className="product-wrapper" style={{ height: "60vh" }}>
      <Goo composite intensity="strong">
        <div className="product-card">
          <div className="product-img-div">
            <img className="product-img" src={"data:image/png;base64," + props.data.image} alt="PRODUCT-IMAGE" />
          </div>
          <h1 className="product-h1-class">{props.data.name}</h1>
          <small className="product-small-class">{props.data.code}</small>

          <label className="product-label-class">
            <input className="product-input-class" type="checkbox" />
            <span className="product-span-class">
              <i className="fas fa-chevron-down"></i>
            </span>

            <div className="product-dets-class">

              <Row>
                <Col xs={2}>Color:</Col>
                <Col>{props.data.color.map((c, index) => {
                  if (index == 0) {
                    return c
                  }
                  // if(props.data.color.length-1==index){
                  //   return ", "+c
                  // }
                  else {
                    return ", " + c
                  }
                })}</Col>
              </Row>
              <Row>
                <Col xs={2}>Code:</Col>
                <Col>DX-00000</Col>
              </Row>
              <Row>
                <Col xs={2}>Types:</Col>
                <Col> 1M, 2M, 3M, 4M, 5M, 6M, 7M, 8M, 9M, 10M</Col>
              </Row>
              {/* <div>Color: Metallic Black, Metallic Grey, White</div>
              <div>Code: DX-00000</div>
              <div>Types: 1M, 2M, 3M, 4M, 5M, 6M, 7M, 8M, 9M, 10M</div> */}

            </div>
          </label>
        </div>
      </Goo>
    </div>
  );
}

{/* <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul> */}

export default Product;
