import React from "react";
import "./destination.css";
import moon from "../../assets/destination/image-moon.png";
import mars from "../../assets/destination/image-mars.png";
import europa from "../../assets/destination/image-europa.png";
import titan from "../../assets/destination/image-titan.png";
const Planet = (props) => {
  const handler = () => {
    if (props.value === "01") return moon;
    else if (props.value === "02") return mars;
    else if (props.value === "03") return europa;
    else return titan;
  };
  return (
    <div>
      <h3 className="top">
        <span> {props.value}</span> pick your destination
      </h3>
      <img className="planet-img" src={handler()} alt="moon" />
    </div>
  );
};

export default Planet;
