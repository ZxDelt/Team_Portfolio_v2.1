import React from "react";
import { Link } from "react-router-dom";

import "../Navbar.css";

export const Icon = ({ link, name, icon }) => {
  return (
    <li>
      <Link to={link}>
        <i className={icon} />
        <span className="links_name">{name}</span>
      </Link>
      <span className="tooltip">{name}</span>
    </li>
  );
};
