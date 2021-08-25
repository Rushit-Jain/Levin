import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import open_doric from "../../assets/open_doric.svg";
import open_dorun from "../../assets/open_dorun.svg";
import open_dolby from "../../assets/open_dolby.svg";
import open_mcb from "../../assets/open_mcb.svg";
import open_accessories from "../../assets/open_accessories.svg";
import closed_doric from "../../assets/closed_doric.svg";
import closed_dorun from "../../assets/closed_dorun.svg";
import closed_dolby from "../../assets/closed_dolby.svg";
import closed_mcb from "../../assets/closed_mcb.svg";
import closed_accessories from "../../assets/closed_accessories.svg";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRange: "dolby",
    };
  }

  handleRangeChange = (range) => this.setState({ selectedRange: range });

  render() {
    return (
      <Container>
        {/* <Row className="contactbox_row1" style={{margin:0, padding:"15px", alignItems:"center"}}>
          <Col className="outer-box-image" xs={12} md={6}>  
            <Col className="inner-box-image">
              <img src={contactImg} style={{background:"antiquewhite", width:"80%"}}/>
            </Col>
          </Col>
          <Col style={{alignSelf: "center"}}>
            <h2 className="about-heading">Contact</h2>
            <h6 className="contact-subheading">
              Any questions or remarks? Write us a message!
            </h6>
          </Col>
        </Row> */}

        <Row style={{ display: "flex", justifyContent: "space-around" }}>
          <img
            onClick={() => this.handleRangeChange("dolby")}
            height="100px"
            width="200px"
            alt="Dolby"
            src={
              this.state.selectedRange === "dolby" ? closed_dolby : open_dolby
            }
          />
          <img
            onClick={() => this.handleRangeChange("doric")}
            height="100px"
            width="200px"
            alt="Doric"
            src={
              this.state.selectedRange === "doric" ? closed_doric : open_doric
            }
          />
          <img
            onClick={() => this.handleRangeChange("dorun")}
            height="100px"
            width="200px"
            alt="Dorun"
            src={
              this.state.selectedRange === "dorun" ? closed_dorun : open_dorun
            }
          />
          <img
            onClick={() => this.handleRangeChange("accessories")}
            height="100px"
            width="200px"
            alt="Accessories"
            src={
              this.state.selectedRange === "accessories"
                ? closed_accessories
                : open_accessories
            }
          />
          <img
            onClick={() => this.handleRangeChange("mcb")}
            height="100px"
            width="200px"
            alt="MCB"
            src={this.state.selectedRange === "mcb" ? closed_mcb : open_mcb}
          />
        </Row>
      </Container>
    );
  }
}

export default Products;
