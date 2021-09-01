import React from "react";
import Goo from "gooey-react";
import "./Product.css";
import pic_svg from "../../assets/pic.svg";

function Product() {
  return (
    <div className="product-wrapper" style={{ height: "80vh" }}>
      <Goo composite intensity="strong">
        <div className="product-card">
          <div className="product-img-div">
            <img className="product-img" src={pic_svg} alt="PRODUCT-IMAGE" />
          </div>
          <h1 className="product-h1-class">1M 6A. 1WAY SWITCH</h1>
          <small className="product-small-class">D004</small>

          <label className="product-label-class">
            <input className="product-input-class" type="checkbox" />
            <span className="product-span-class">
              <i className="fas fa-chevron-down"></i>
            </span>

            <div className="product-dets-class">
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
              <div>Color</div>
              <div>Code</div>
              <div>Types</div>
            </div>
          </label>
        </div>
      </Goo>
    </div>
  );
}

export default Product;
