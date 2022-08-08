import React from "react";

import "./Doublediv.css";

export const Doublediv = (props) => {
  return (
    <>
      <div className="component-container">
        <div className="component-container1">{props.ev1}</div>
        <div className="component-container2">{props.ev2}</div>
      </div>
    </>
  );
};
