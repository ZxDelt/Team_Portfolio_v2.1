import React from "react";
import { Home } from "../../Pages/Home/Home";
import { About } from "../../Pages/About/About";
import { MK } from "../../Pages/MK/MK"; //fixed y
import { Harshi } from "../../Pages/Harshi/Harshi";
import { ZxDelt } from "../../Pages/ZxDelt/ZxDelt";
import { Routes, Route } from "react-router-dom";

export const Body = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Mk" element={<MK />} />
        <Route path="/Harshi" element={<Harshi />} />
        <Route path="/ZxDelt" element={<ZxDelt />} />
      </Routes>
    </>
  );
};
