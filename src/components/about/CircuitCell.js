import React from "react";

const CircuitCell = (props) => {
  return (
    <svg width="inherit" height="inherit">
      <line
        x1="0"
        y1="50%"
        x2="30%"
        y2="50%"
        style={{ stroke: "rgb(255,0,0)", strokeWidth: 1 }}
      />
      <line
        x1="30%"
        y1="30%"
        x2="30%"
        y2="70%"
        style={{ stroke: "rgb(255,0,0)", strokeWidth: 1 }}
      />
      <line
        x1="33%"
        y1="40%"
        x2="33%"
        y2="60%"
        style={{ stroke: "rgb(255,0,0)", strokeWidth: 1 }}
      />
      <line
        x1="33%"
        y1="50%"
        x2="100%"
        y2="50%"
        style={{ stroke: "rgb(255,0,0)", strokeWidth: 1 }}
      />
    </svg>
  );
};

export default CircuitCell;
