import React from "react";
import Goo from "gooey-react";
import { Row, Col } from "react-bootstrap";
import "./Product.css";
import pic_svg from "../../assets/pic.svg";

function Product(props) {
  return (
    // <div className="product-wrapper" style={{ height: "60vh" }}>
    //   <Goo composite intensity="strong">
    //     <div className="product-card">
    //       <div className="product-img-div">
    //         <img className="product-img" alt="PRODUCT-IMG" src={"data:image/png;base64," + props.data.image} />
    //       </div>
    //       <h1 className="product-h1-className">{props.data.name}</h1>
    //       <small className="product-small-className">{props.data.code}</small>
    //       <label className="product-label-className">
    //         <input className="product-input-className" type="checkbox" />
    //         <span className="product-span-className">
    //           <i className="fas fa-chevron-down"></i>
    //         </span>
    //         <div className="product-dets-className">

    //           <Row>
    //             <Col xs={2}>Color:</Col>
    //             <Col>{props.data.color.map((c, index) => {
    //               if (index == 0) {
    //                 return c
    //               }
    //               // if(props.data.color.length-1==index){
    //               //   return ", "+c
    //               // }
    //               else {
    //                 return ", " + c
    //               }
    //             })}</Col>
    //           </Row>
    //           <Row>
    //             <Col xs={2}>Code:</Col>
    //             <Col>DX-00000</Col>
    //           </Row>
    //           <Row>
    //             <Col xs={2}>Types:</Col>
    //             <Col> 1M, 2M, 3M, 4M, 5M, 6M, 7M, 8M, 9M, 10M</Col>
    //           </Row>
    //           {/* <div>Color: Metallic Black, Metallic Grey, White</div>
    //           <div>Code: DX-00000</div>
    //           <div>Types: 1M, 2M, 3M, 4M, 5M, 6M, 7M, 8M, 9M, 10M</div> */}

    //         </div>
    //       </label>
    //     </div>
    //   </Goo>
    // </div>
    <div className="card" tabIndex="0">
      <div className="imgBx">
        <img alt="PRODUCT-IMG" src={"data:image/png;base64," + props.data.image} />
      </div>
      <div className="contentBx">
        <h2 className="product-h1-className">{props.data.name}</h2>
        <small className="product-small-className">{props.data.code}</small>
        <div className="size">
          <h3>Size :</h3>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
            {/*<div className="product-dets-class">
              {props.data.color != null ? (
                <Row>
                  <Col xs={2}>Color:</Col>
                  <Col xs={{ offset: 1 }}>
                    {props.data.color.map((c, index) => {
                      if (index == 0) {
                        return c;
                      }
                      // if(props.data.color.length-1==index){
                      //   return ", "+c
                      // }
                      else {
                        return ", " + c;
                      }
                    })}
                  </Col>
                </Row>
              ) : (
                <></>
              )}
              {props.data.types != null ? (
                <Row>
                  <Col xs={2}>Types:</Col>
                  <Col xs={{ offset: 1 }}>
                    {props.data.types.map((t, index) => {
                      if (index == 0) {
                        return t;
                      }
                      // if(props.data.color.length-1==index){
                      //   return ", "+c
                      // }
                      else {
                        return ", " + t;
                      }
                    })}
                  </Col>
                </Row>
              ) : (
                <></>
              )}
              <div>Color: Metallic Black, Metallic Grey, White</div>
              <div>Code: DX-00000</div>
              <div>Types: 1M, 2M, 3M, 4M, 5M, 6M, 7M, 8M, 9M, 10M</div>
            </div>
          </label> */}
        </div>
        <div className="color">
          <h3>Color :</h3>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

{
  /* <ul>
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
              </ul> */
}

export default Product;
