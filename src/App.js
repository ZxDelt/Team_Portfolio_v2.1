// using hook for embeding js
import { useLayoutEffect } from "react";

import "./App.css";
// import "./App.scss";
import { Header } from "./Components/Header/Header.js";
import { Body } from "./Components/Body/Body.js";
import { Footer } from "./Components/Footer/Footer.js";

function App() {
  // ======================for custom cursor
  useLayoutEffect(() => {
    const root = document.querySelector("html");

    // Real cursor element
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    root.appendChild(cursor);

    // Following extra cursor element
    const follower = document.createElement("div");
    follower.classList.add("cursor", "cursor__follower");
    root.appendChild(follower);

    root.addEventListener("mousemove", (e) => {
      setPosition(follower, e);
      setPosition(cursor, e);
    });

    function setPosition(element, e) {
      element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    }
  }, []);
  // ======================for custom cursor

  return (
    <>
      {/* it all started here */}
      <Header />
      <div className="divdada">
        <Body />
        <Footer />
      </div>
      {/* and ended right here */}
    </>
  );
}

export default App;
