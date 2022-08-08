import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import { Element2 } from "./Homecomponents/Element2/Element2";
import { Awtext } from "./Homecomponents/Awtext/Awtext";
import { Element3 } from "./Homecomponents/Element3/Element3";
import { Element4 } from "./Homecomponents/Element4/Element4";
import { Th } from "./Homecomponents/Texthighlighter/Th";
import * as SPLR from "../../SPLR";
import { Parallexelement } from "./Homecomponents/Parallelelement/Parallexelement";

export const Home = () => {
  return (
    <>
      <div className="hero">
        <h1 className="hh1">Hero Image × CSS Gradient</h1>
      </div>
      <Awtext />
      {/* ====================For info on SPLR library check Readme.md file================== */}
      {/* ===========trying SPLR library======== */}
      {/* <Doublediv ev1={<Element3 />} /> */}
      <SPLR.Doublediv ev1={<Element3 />} ev2={<Th />} />
      {/* ===========trying SPLR library======== */}
      <Parallexelement />
      {/* last element is Element4 on home add anything before it */}
      <Element4 />
      {/* on a break call or whatsapp if urgent */}
      {/*  */}
    </>
  );
};
