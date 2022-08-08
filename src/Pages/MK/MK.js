import React from "react";
import "./MK.css";
import { Scrollbar } from "./MKcomponents/Scrollbar/Scrollbar.js";
import { Infobox } from "./MKcomponents/Infobox/Infobox.js";
import { Circlehover } from "./MKcomponents/Infobox/Circlehover.js";
import * as SPLR from "../../SPLR";

export const MK = () => {
  return (
    <>
      <div className="Box1">
        <div className="containerr">
          <div className="container_content">
            <div className="container_content_inner">
              <div className="title">
                <h1 className="Hh">Hola</h1>
              </div>
              <div className="par">
                <p className="P">
                  I'm monika et sum a se developed elit absque usura alicuius
                  auxilio hahahahahahahahahahahaha hahahahahahahahahahahaha
                </p>
              </div>
              <div className="btns">
                <button className="btns_more"> See more </button>
              </div>
            </div>
          </div>
          <div className="container_outer_img">
            <div className="img-inner">
              <img
                src="https://images.unsplash.com/photo-1517911041065-4960862d38f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80"
                alt=""
                className="container_img"
              />
            </div>
          </div>
        </div>
        <div className="overlayxx" />
      </div>
      {/* Scrollbar */}
      {/* Just for test */}
      <Scrollbar />
      <Circlehover />
      <Infobox />
      {/* <div className="Cirlepapa"> */}
      {/* check out mk.css for more */}
      {/* </div> */}
    </>
  );
};
