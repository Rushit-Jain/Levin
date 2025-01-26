import React, {Component} from 'react';
import axios from 'axios';
import { Row, Col, Container } from "react-bootstrap";

const categoryCodes = {
    doric: [
      "switches",
      "sockets",
      "ancilaries",
      "dimmers-fan-regulators",
      "bell-led-hotel-series",
      "motor-starters-tiny-mcb-ac-geyser-box",
      "switch-plate",
      "surface-concealed-box",
    ],
    dolby: [
      "switches",
      "sockets",
      "dimmers-fan-regulators",
      "ancillaries",
      "fuse-tiny-mcb-blank-module",
      "bell-led-hotel-series",
      "switch-plates",
    ],
    dorun: [
      "switches",
      "sockets",
      "dimmers-fan-regulators",
      "fuse-mcb",
      "dp-switch",
      "ss-combined",
    ],
    accessories: [
      "ceiling-rose",
      "lamp-holders",
      // "plug-tops-bed-switch",
      "conversion-multi-plugs",
      "door-bells",
      "ceiling-plates",
      // "power-strip",
      "modular-blank-plates"
    ],
    mcb: ["mcb", "isolator", "changeover", "rccb", "distribution-box"],
    led: ["led-panels","flood-light","street-light"],
    dura: ["modular-type", "screw-type"]
};

class ProformaGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            incomingProductData: null,
            selectedProductData: null
        };
    }
    componentDidMount() {
        axios
          .get(
            `https://levin-e1c22-default-rtdb.firebaseio.com/products.json`
          )
          .then((res) => {
            let data = {};
            for(const range in res.data)
                for(const category in categoryCodes[range])
                    for(const product in res.data[range][category])
                        data = {...{code: product['code'], name: product['name'], list: product['list']}};
            this.setState({ incomingProductData: data });
          });
    }
    render() {
        let renderedList =
            Object.keys(this.state.incomingProductData).map((data) => (
                <Row className="px-0 px-sm-4">
                    <Col>
                        {data.name}
                    </Col>
                    <Col>
                        {data.list}
                    </Col>
                </Row>
              ));
    }
}

export default ProformaGenerator;