import React, { useEffect, useState } from "react";
import "./About.css";
import { Mastcard } from "./Components/Mastcard.js";
import { Accordion } from "./Components/Accordion.js";
import { db } from "../../Firebase/firebase-config.js";
import { collection, getDocs } from "firebase/firestore";
import * as SPLR from "../../SPLR"; //importing SPLR library
import { Contact } from "./Components/Contact";
export const About = () => {
  //for those cards===============================================
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getMembers();
  }, []);

  const getMembers = async () => {
    try {
      const membersCollectionRef = await collection(db, "cardmembers");

      const response = await getDocs(membersCollectionRef);

      console.log(response);

      const mem = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      setMembers(mem);
    } catch (error) {
      console.log(error.message);
    }
  };
  //for those cards===============================================

  return (
    <>
      <head>
        <title> About us</title>
      </head>
      {/* that cool single word bg text hero section */}
      <div className="badadiv">
        <div className="main-content">
          <div className="concept concept-two">
            <div className="hover">
              <h1 className="hhh1">A</h1>
            </div>
            <div className="hover">
              <h1 className="hhh1">B</h1>
            </div>
            <div className="hover">
              <h1 className="hhh1">O</h1>
            </div>
            <div className="hover">
              <h1 className="hhh1">U</h1>
            </div>
            <div className="hover">
              <h1 className="hhh1">T</h1>
            </div>
            <div className="hover">
              <h1 className="hhh1"> </h1>
            </div>
            <div className="hover">
              <h1 className="hhh1">U</h1>
            </div>
            <div className="hover">
              <h1 className="hhh1">S</h1>
            </div>
          </div>
        </div>
        {/* that cool single word bg text hero section */}
        {/* for those cards=============================================== */}
        <div className="blurcardxx" id="blurcardyy">
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
            rel="stylesheet"
          />
          <section className="hero-section">
            <div className="card-grid">
              {members.map((mem) => (
                <Mastcard
                  name={mem.name}
                  role={mem.role}
                  link={mem.link}
                  image={mem.image}
                />
              ))}
            </div>
          </section>
        </div>
        {/* for those cards=============================================== */}
      </div>
      <div className="accorpapa">
        <Accordion />
      </div>

      {/* Using SPLR Component===================================== */}
      <SPLR.GlitchTextBg
        text={"hahah"}
        bgimg={
          "https://images.unsplash.com/photo-1446080501695-8e929f879f2b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=34658e73aff775c8d4eec54bbfd1c011"
        }
        bgcolor={"blue"}
      />

      <SPLR.Singlediv
        ev={<Contact />}
        // you can give mail a bg here inside the evimbg double quotes
        evimbg={
          "linear-gradient(to bottom right,#91defe,#99c0f9,#bdb6ec,#d7b3e3,#efb3d5,#f9bccc)"
        }
      />
      <SPLR.Singlediv
        ev={
          <SPLR.GradientHoverCard
            text={"hahah"}
            radius={"10px"}
            bgimg={
              "https://images.unsplash.com/photo-1659203540215-bb0044083ff5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
            }
          />
        }
        evimbg={""}
      />
      {/* Using SPLR Component===================================== */}
    </>
  );
};
