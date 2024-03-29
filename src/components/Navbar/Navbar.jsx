import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/shared/logo.svg";
import line from "../../assets/home/Rectangle.svg";
import close from "../../assets/shared/icon-close.svg";
import hamburger from "../../assets/shared/bars-solid.svg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const navSwitch = () => {
    styles === "translated"
      ? setStyles("non-translated")
      : setStyles("translated");
  };

  const [styles, setStyles] = useState("translated");
  return (
    <div className="navbar-container">
      <div className="hamburger">
        <button onClick={navSwitch}>
          <img src={hamburger} alt="hamburger" />
        </button>
      </div>
      <div className="logo">
        <NavLink to="/home">
          <img src={logo} alt="space site logo" />
        </NavLink>
      </div>
      <div className="h-line">
        <img src={line} alt="horizontal line" aria-hidden="true" />
      </div>
      <nav className={`navbar ${styles}`}>
        <button onClick={navSwitch} className="icon-close">
          <img src={close} alt="close" width="100%" />
        </button>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/"
              onClick={navSwitch}
            >
              <span aria-hidden="true">00</span> home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/destination"
              onClick={navSwitch}
            >
              <span aria-hidden="true">01</span> destination
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/crew"
              onClick={navSwitch}
            >
              <span aria-hidden="true">02</span> crew
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/technology"
              onClick={navSwitch}
            >
              <span aria-hidden="true">03</span> technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
