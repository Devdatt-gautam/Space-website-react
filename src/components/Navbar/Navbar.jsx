import React from "react";
import "./Navbar.css";
import logo from "../../assets/shared/logo.svg";
import line from "../../assets/home/Rectangle.svg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <img src={logo} alt="space site logo" />
      </div>
      <div className="h-line">
        <img src={line} alt="horizontal line" aria-hidden="true" />
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/"
            >
              <span aria-hidden="true">00</span> home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/destination"
            >
              <span aria-hidden="true">01</span> destination
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/crew"
            >
              <span aria-hidden="true">02</span> crew
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/technology"
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
