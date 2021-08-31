import React from "react";
import Goo from "gooey-react";
import "./Product.css";
import pic_svg from "../../assets/pic.svg";

function Product() {
  return (
    <>
      <div>
        <h2>Working for slimmy card effect</h2>
      </div>

      <div className="product-wrapper" style={{ height: "800px" }}>
        <Goo composite intensity="strong">
          <div className="product-card">
            <div className="product-img-div">
              <img className="product-img" src={pic_svg} alt="" />
            </div>
            <h1 className="h1-class">Rushit Jain</h1>
            <small className="small-class">Levin Switches</small>

            <label className="label-class">
              <input className="input-class" type="checkbox" />
              <span className="span-class">
                <i className="fas fa-chevron-down"></i>
              </span>

              <div className="socialicon">
                <ul>
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
                </ul>
              </div>
            </label>
          </div>
        </Goo>
      </div>
    </>
  );
}

export default Product;
