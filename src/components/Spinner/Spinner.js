import React from "react";
import logo from "../../assets/nav_toggle.jpg";

import "./Spinner.css";
var Spinner = () => (
  <div>
    <div id="container justify-content-center align-items-center">
      <img style={{animation: `spin 1s linear infinite`}} height={100} width={100} src={logo} alt="LEVIN"/>
    </div>
  </div>
);

export default Spinner;
