import React from "react";
import "./iskandar.scss";
import { NavLink } from "react-router-dom";

const Iskandar = () => {
  return (
    <div>
      <header>
        <NavLink to={"/"}>Home</NavLink>
      </header>
      <h2 className="iskandar__text">Iskandar</h2>
    </div>
  );
};

export default Iskandar;
