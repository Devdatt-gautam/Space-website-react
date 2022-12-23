import React from "react";
import "./destination.css";
const PlanetData = (props) => {
  return (
    <>
      {props.value === "01" ? (
        <div className="planet-data">
          <h1 className="planet-name">moon</h1>
          <p className="planet-description">
            See our planet as you've never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you're there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div className="hor-line"></div>
          <div className="measurements">
            <div className="measurement1">
              <p>avg. distance</p>
              <h6>384,400 KM</h6>
            </div>
            <div className="measurement2">
              <p>Est. travel time</p>
              <h6>3 days</h6>
            </div>
          </div>
        </div>
      ) : props.value === "02" ? (
        <div className="planet-data">
          <h1 className="planet-name">mars</h1>
          <p className="planet-description">
            Don't forget to pack your hiking boots. You'll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system.
            It's two and a half times the size of Everest!
          </p>
          <div className="hor-line"></div>
          <div className="measurements">
            <div className="measurement1">
              <p>avg. distance</p>
              <h6>225 MIL. km</h6>
            </div>
            <div className="measurement2">
              <p>Est. travel time</p>
              <h6>9 months</h6>
            </div>
          </div>
        </div>
      ) : props.value === "03" ? (
        <div className="planet-data">
          <h1 className="planet-name">europa</h1>
          <p className="planet-description">
            The smallest of the four Galilean moons orbiting Jupiter, Europa is
            a winter lover's dream. With an icy surface, it's perfect for a bit
            of ice skating, curling, hockey, or simple relaxation in your snug
            wintery cabin.
          </p>
          <div className="hor-line"></div>
          <div className="measurements">
            <div className="measurement1">
              <p>avg. distance</p>
              <h6>628 MIL. km</h6>
            </div>
            <div className="measurement2">
              <p>Est. travel time</p>
              <h6>3 years</h6>
            </div>
          </div>
        </div>
      ) : (
        <div className="planet-data">
          <h1 className="planet-name">titan</h1>
          <p className="planet-description">
            The only moon known to have a dense atmosphere other than Earth,
            Titan is a home away from home (just a few hundred degrees colder!).
            As a bonus, you get striking views of the Rings of Saturn.
          </p>
          <div className="hor-line"></div>
          <div className="measurements">
            <div className="measurement1">
              <p>avg. distance</p>
              <h6>1.6 BIL. km</h6>
            </div>
            <div className="measurement2">
              <p>Est. travel time</p>
              <h6>7 years</h6>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PlanetData;
