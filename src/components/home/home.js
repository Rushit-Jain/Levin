import React, { Component } from "react";
import { Container, Row, Col, Form, Table } from "react-bootstrap";
import tvcabinet from "../../assets/Tv unit Designs.png";
import milestones from "../../assets/illustrations/milestones.svg";
import bedroom from "../../assets/home.jpg";

import "./home.css";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className="home-row" style={{ margin: "auto" }}>
          <Col className="col-md-4 d-none d-md-block">
            <img
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              src={bedroom}
              alt="tv-cabinet"
            />
          </Col>
          <Col
            className="home-headings col-md-4 col-12"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "25px",
            }}
          >
            <h2 className="home-heading" style={{ color: "snow" }}>
              REJUVENATE THE INTERIORS
            </h2>
            <h2 className="home-heading-2">SWITCH TO THE BEST</h2>
          </Col>
          <Col className="col">
            <img
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              src={tvcabinet}
              alt="tv-cabinet"
            />
          </Col>
        </Row>
        <h1
          style={{
            backgroundColor: "brown",
            margin: 0,
            paddingTop: "20px",
            textAlign: "center",
            color: "white",
          }}
        >
          Milestones
        </h1>
        <Row
          style={{ margin: 0 }}
          className="home-row-2 justify-content-center"
        >
          <Col className="col-sm-7 col-md-7 col-lg-6 ">
            <img
              src={milestones} alt="milestone-svg"
            // style={{ width: "80%" }}
            />
          </Col>
          <Table borderless hover className="col-lg-4 col-md-3 col-sm-8 offset-lg-1 align-self-center" style={{ height: "fit-content" }}>

            <tbody>
              <tr>
                <td style={{ borderRight: "1px solid", borderBottom: "1px solid" }}>
                  <div className="client-count milestones-heading-main">
                    +{" "}
                  </div><div className="milestones-heading">
                    Clients Across{" "}
                  </div></td>
                <td style={{ borderLeft: "1px solid", borderBottom: "1px solid" }}><div className="state-count milestones-heading-main">
                  +
                </div><div className="milestones-heading">
                    {" "}
                    Indian States Served
                  </div></td>

              </tr>
              <tr>
                <td style={{ borderRight: "1px solid" }}><div className="state-count milestones-heading-main">
                  +
                </div><div className="milestones-heading">
                    {" "}
                    Years of Experience
                  </div></td>
                <td ><div className="p-0 client-count milestones-heading-main">+{" "}
                </div><div className="milestones-heading">
                    Products
                  </div></td>
              </tr>
            </tbody>
          </Table>
          {/* <Col className="align-items-center justify-content-center">
            <Row>
              <Col><div className="p-0 client-count home-heading-2">+{" "}
              </div>
                <div className="p-0 home-heading-2">
                  Clients Across{" "}
                </div></Col>
              <Col><div className="p-0 state-count home-heading-2">
                +{" "}

              </div><div className="p-0 home-heading-2">

                  Indian States Served
                </div></Col>


            </Row>
            <Row>
              <Col><div className="p-0 year-count home-heading-2">+{" "}
              </div>
                <div className="p-0 home-heading-2">
                  Years Of Experience
                </div></Col>
              <Col><div className="p-0 product-count home-heading-2">
                +{" "}
              </div><div className="p-0 home-heading-2">
                  Products
                </div></Col>
            </Row>

          </Col> */}

        </Row>
      </React.Fragment>
    );
  }
}

export default Home;
