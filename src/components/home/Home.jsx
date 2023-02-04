import React from "react";
import { NavLink } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <section className="main-content">
        <div className="home-info">
          <h5>So, you want to travel to</h5>
          <h1>space</h1>
          <p>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <NavLink to="/destination">
          <div className="button">
            <button>explore</button>
          </div>
        </NavLink>
      </section>
    </div>
  );
};

export default Home;
