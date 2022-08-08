import React from "react";
// import { Link } from "react-router-dom";

import "./GradientHoverCard.scss";

export const GradientHoverCard = ({ text, radius, bgimg }) => {
  const colorprop = {
    borderRadius: radius
  };
  const bgimgprop = {
    background: `url(${bgimg}) no-repeat center center`
  };

  return (
    <>
      <div className="c-preview" style={colorprop}>
        <div className="c-preview__img" style={bgimgprop}></div>
        <h2 className="c-preview__title">{text}</h2>
      </div>
    </>
  );
};
