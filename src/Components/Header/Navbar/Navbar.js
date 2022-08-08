import React, { useState, useEffect } from "react";
import { Icon } from "./Component/Icon";

import { db } from "../../../Firebase/firebase-config.js";
import { collection, getDocs } from "firebase/firestore";

import "./Navbar.css";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  // fire base start
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getMembers();
  }, []);

  const getMembers = async () => {
    try {
      const membersCollectionRef = await collection(db, "members");

      const response = await getDocs(membersCollectionRef);

      console.log(response);

      const mem = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      setMembers(mem);
    } catch (error) {
      console.log(error.message);
    }
  };
  // fire base end

  return (
    <>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* boxicons cdn link     */}
      <link
        href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="style.css" />
      <title>Navbar</title>
      <div className={toggle ? "sidebar active" : "sidebar"}>
        <div className="logo_content">
          <div className="logo">
            <i className="bx bxl-c-plus-plus" />
            <div className="logo_name">TeamSite</div>
          </div>
          <i
            className="bx bx-menu"
            id="btn"
            onClick={() => setToggle(!toggle)}
          />
        </div>
        <ul className="nav_list">
          {members.map((mem) => (
            <Icon link={mem.link} name={mem.name} icon={mem.icon} />
          ))}
        </ul>
      </div>
      <div className="div_mobile_icon">
        <i
          className="bx bx-menu mobileicon"
          id="mobilebtn"
          onClick={() => setToggle(!toggle)}
        />
      </div>
    </>
  );
};
