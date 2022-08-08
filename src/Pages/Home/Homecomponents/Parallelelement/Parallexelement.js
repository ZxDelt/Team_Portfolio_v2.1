import React from "react";

import "./Parallexelement.css";

export const Parallexelement = ({ image1, image2, image3 }) => {
  const h1one = {
    backgroundImage: `url(${image1})`
  };
  const h1two = {
    backgroundImage: `url(${image2})`
  };
  const h1three = {
    backgroundImage: `url(${image3})`
  };

  return (
    <>
      <div style={h1one} className="pxparentdiv1">
        <div className="pxoverlay">
          <h1 className="pxh1">Old School</h1>
        </div>
      </div>
      <div style={h1two} className="pxparentdiv2">
        <div className="pxoverlay">
          <h1 className="pxh1">Yet</h1>
        </div>
      </div>
      <div style={h1three} className="pxparentdiv3">
        <div className="pxoverlay">
          <h1 className="pxh1">Amazing</h1>
        </div>
      </div>
    </>
  );
};

Parallexelement.defaultProps = {
  image1:
    "https://images.pexels.com/photos/1510610/pexels-photo-1510610.jpeg?auto=compress&cs=tinysrgb&w=1600",
  image2:
    "https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=600",
  image3:
    "https://images.pexels.com/photos/7792264/pexels-photo-7792264.jpeg?auto=compress&cs=tinysrgb&w=600"
};
