import React from "react";
import "./Navbar.css";
import logo from "../../assets/shared/logo.svg";
import line from "../../assets/home/Rectangle.svg";
import { Link } from "react-router-dom";
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
            <Link to="/" tabindex="1">
              <span aria-hidden="true">01</span> home
            </Link>
          </li>
          <li>
            <Link to="/destination" tabindex="1">
              <span aria-hidden="true">02</span> destination
            </Link>
          </li>
          <li>
            <Link to="/crew" tabindex="1">
              <span aria-hidden="true">03</span> crew
            </Link>
          </li>
          <li>
            <Link to="/technology" tabindex="1">
              <span aria-hidden="true">04</span> technology
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
