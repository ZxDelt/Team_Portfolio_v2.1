import React from "react";

import "./GlitchTextBg.scss";

export const GlitchTextBg = ({ text, bgimg, bgcolor }) => {
  const glitchprops = {
    backgroundImage: `url(${bgimg})`,
    backgroundColor: bgcolor
  };

  return (
    <>
      <div className="center" style={glitchprops}>
        <h1 className="center__text glitch is-glitching" data-text={text}>
          {text}
        </h1>
      </div>
    </>
  );
};
