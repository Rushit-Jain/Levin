import React from "react";

const CircuitSwitch = (props) => {
  return (
    <svg height="inherit" width="inherit">
      <defs>
        <marker
          id="arrow"
          markerWidth="10"
          markerHeight="10"
          refX="0"
          refY="3"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L0,6 L9,3 z" fill="#f00" />
        </marker>
      </defs>
      <circle
        cx="50%"
        cy="1.5%"
        r="1.5%"
        stroke="red"
        stroke-width="1"
        fill="transparent"
      />
      <line
        x1="50%"
        y1="2.5%"
        x2="50%"
        y2="45.5%"
        style={{ stroke: "rgb(255,0,0)", strokeWidth: 1 }}
      />
      <circle
        cx="50%"
        cy="46.5%"
        r="1.5%"
        stroke="red"
        stroke-width="1"
        fill="transparent"
      />
      <circle
        cx="50%"
        cy="58.5%"
        r="1.5%"
        stroke="red"
        stroke-width="1"
        fill="transparent"
      />
      <line
        x1="50%"
        y1="47.5%"
        x2="95%"
        y2="53%"
        marker-end="url(#arrow)"
        style={{ stroke: "rgb(255,0,0)", strokeWidth: 1 }}
      />
      <line
        x1="50%"
        y1="59.5%"
        x2="50%"
        y2="97.5%"
        style={{ stroke: "rgb(255,0,0)", strokeWidth: 1 }}
      />
      <circle
        cx="50%"
        cy="98.5%"
        r="1.5%"
        stroke="red"
        stroke-width="1"
        fill="transparent"
      />
    </svg>
  );
};

export default CircuitSwitch;
