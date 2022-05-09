import React from "react";
import Goo from "gooey-react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "./Product.css";
import pic_svg from "../../assets/pic.svg";

function Product(props) {
  let color = {
    WHITE: "#fff",
    "METALLIC GREY": "#8E8E8E",
    "METALLIC BLACK": "#2C2C2B",
    "METALLIC RED": "#a62c2b",
    "WOOD COPPER": "#b87333",
    "WOOD WENGE": "#645452",
    ORANGE: "#FFA500",
    SILVER: "#C0C0C0",
  };
  if (!props.data.image) return <></>;
  return (
    <div
      className="card"
      tabIndex="0"
      style={props.range === "dolby" ? { background: "antiquewhite" } : {}}
    >
      <span
        className="border-light"
        style={
          props.range === "dolby"
            ? { background: "linear-gradient(to right, transparent, black)" }
            : {}
        }
      ></span>
      <span
        className="border-light"
        style={
          props.range === "dolby"
            ? { background: "linear-gradient(to bottom, transparent, black)" }
            : {}
        }
      ></span>
      <span
        className="border-light"
        style={
          props.range === "dolby"
            ? { background: "linear-gradient(to left, transparent, black)" }
            : {}
        }
      ></span>
      <span
        className="border-light"
        style={
          props.range === "dolby"
            ? { background: "linear-gradient(to top, transparent, black)" }
            : {}
        }
      ></span>
      <div className="imgBx">
        <img alt="product" src={"data:image/png;base64," + props.data.image} />
      </div>
      <div className="contentBx">
        <h2
          className="product-h1-className"
          style={props.range === "dolby" ? { color: "black" } : {}}
        >
          {props.data.name}
        </h2>
        <small
          className="product-small-className"
          style={props.range === "dolby" ? { color: "black" } : {}}
        >
          {props.data.code}
        </small>
        <br></br>
        <br></br>
        {props.data.color ? (
          <div className="color">
            {props.data.color ? (
              <h3 style={props.range === "dolby" ? { color: "black" } : {}}>
                Color :
              </h3>
            ) : (
              <br></br>
            )}
            {props.data.color ? (
              props.data.color.map((c, index) => (
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={
                    <Tooltip id="button-tooltip" {...props}>
                      {c}
                    </Tooltip>
                  }
                >
                  <span
                    style={
                      props.range === "dolby"
                        ? { border: "black solid 3px", background: color[c] }
                        : {
                            border: "antiquewhite solid 3px",
                            background: color[c],
                          }
                    }
                  ></span>
                </OverlayTrigger>
              ))
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}
        <div className="types">
          {props.data.types ? (
            <h3 style={props.range === "dolby" ? { color: "black" } : {}}>
              Types :
            </h3>
          ) : (
            <></>
          )}
          {props.data.types ? (
            props.data.types.map((c, index) => (
              <span
                style={
                  props.range === "dolby"
                    ? { color: "black" }
                    : { color: "antiquewhite" }
                }
              >
                {c}
                {index >= props.data.types.length - 1 ? " " : ", "}
              </span>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
