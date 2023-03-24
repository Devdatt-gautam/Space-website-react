import React, { useState, useEffect } from "react";
import "./destination.css";
import Planet from "./Planet";
import PlanetData from "./PlanetData";
// import bg from "../../assets/destination/background-destination-desktop.jpg";
const Destination = () => {
  const [toggleKey, setToggleKey] = useState("01");
  const handle = (e) => {
    setToggleKey(e.target.value);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (toggleKey === "01") {
        setToggleKey("02");
      } else if (toggleKey === "02") {
        setToggleKey("03");
      } else if (toggleKey === "03") {
        setToggleKey("04");
      } else setToggleKey("01");
    }, 10000);
    return () => clearTimeout(timer);
  }, [toggleKey]);
  return (
    <div className="destination">
      <div className="visual-content">
        <Planet value={toggleKey} />
      </div>
      <div className="description-container">
        <div className="toggle-buttons">
          <button
            onClick={handle}
            value="01"
            className={toggleKey === "01" ? "active" : "inactive"}
          >
            Moon
          </button>
          <button
            className={toggleKey === "02" ? "active" : "inactive"}
            onClick={handle}
            value="02"
          >
            Mars
          </button>
          <button
            className={toggleKey === "03" ? "active" : "inactive"}
            onClick={handle}
            value="03"
          >
            Europa
          </button>
          <button
            className={toggleKey === "04" ? "active" : "inactive"}
            onClick={handle}
            value="04"
          >
            Titan
          </button>
        </div>
        <div className="description">
          <PlanetData value={toggleKey} />
        </div>
      </div>
    </div>
  );
};

export default Destination;
