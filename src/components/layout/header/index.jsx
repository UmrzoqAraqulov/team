import "./header.scss";

import AAA from "../../../pages/AAA";
import { NavLink } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="container header__container">
          <div>
            <h1 className="header__logo">Logo</h1>
          </div>
          <ul className="header__list">
            <li className="header__item">
              <NavLink className="header__link">Home</NavLink>
            </li>
            <li className="header__item">
              <NavLink className="header__link">About</NavLink>
            </li>
            <li className="header__item">
              <NavLink className="header__link">Services</NavLink>
            </li>
            <li className="header__item">
              <NavLink className="header__link">Login</NavLink>
            </li>
            <li className="header__item">
              <NavLink to="aaa" className="header__link">
                abdulaziz
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
