import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import "./Spinner.css";
var Spinner = () => (
  <div>
    <div id="container">
      <svg viewBox="0 0 100 100">
        <defs>
          <filter id="shadow">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="1.5"
              flood-color="#fc6767"
            />
          </filter>
        </defs>
        <circle id="spinner" cx="50" cy="50" r="25" />
      </svg>
    </div>
  </div>
);

export default Spinner;
