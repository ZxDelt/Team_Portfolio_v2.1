import React from "react";
import "./Thunder.css";
import "./Thunder.scss";

import { Rain } from "./Components/Rain";
import { DemonZx } from "./Components/DemonZx";

export const Thunder = () => {
  return (
    <>
      <div className="Thunderdivmain">
        <Rain />
        <div className="darawnainsaan">
          <DemonZx />
        </div>
      </div>
    </>
  );
};
