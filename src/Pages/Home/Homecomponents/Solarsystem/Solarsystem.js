import React from "react";
// import "./Solarsystem.css";
// need to fix this css👆

export const Solarsystem = () => {
  return (
    <>
      <div className="bg" />
      <div className="container">
        <div className="planets sun">
          <div className="one ring" />
          <div className="two">
            <div className="ring" />
            <div className="seven" />
          </div>
          <div className="three">
            <div className="ring" />
            <div className="four" />
          </div>
          <div className="three slow">
            <div className="ring" />
            <div className="five" />
          </div>
          <div className="three fast">
            <div className="ring" />
            <div className="six" />
          </div>
        </div>
      </div>
    </>
  );
};
