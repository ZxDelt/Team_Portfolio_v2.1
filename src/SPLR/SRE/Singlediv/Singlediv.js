import React from "react";

export const Singlediv = ({ ev, evimbg, evbgc }) => {
  const Singlediv = {
    flex: "0 0 auto",
    width: "100%",
    height: "100vh",
    display: "flex",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: evimbg,
    backgroundColor: evbgc
  };

  return (
    <>
      <div style={Singlediv}>{ev}</div>
    </>
  );
};
//needs to pass default values here {can be done later}
