import React, { useState, useEffect } from "react";
import lv from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import lv2 from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import sp from "../../assets/technology/image-spaceport-portrait.jpg";
import sp2 from "../../assets/technology/image-spaceport-landscape.jpg";
import sc from "../../assets/technology/image-space-capsule-portrait.jpg";
import sc2 from "../../assets/technology/image-space-capsule-landscape.jpg";
import "./technology.css";

const Technology = () => {
  const [num, setNum] = useState("1");
  const clicker = (e) => {
    setNum(e.target.value);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (num === "1") {
        setNum("2");
      } else if (num === "2") {
        setNum("3");
      } else setNum("1");
    }, 8000);
    return () => clearTimeout(timer);
  }, [num]);
  const evaluate = () => {
    if (num === "3") return sc;
    else if (num === "2") return sp;
    else return lv;
  };
  const evaluate2 = () => {
    if (num === "3") return sc2;
    else if (num === "2") return sp2;
    else return lv2;
  };
  return (
    <div className="technology">
      <h1 className="title">
        <span>03 </span>space launch 101
      </h1>
      <div className="left">
        <div className="content">
          <div className="b-bar">
            <button
              className={num === "1" ? "open" : "close"}
              value={1}
              onClick={clicker}
            >
              1
            </button>
            <button
              className={num === "2" ? "open" : "close"}
              value={2}
              onClick={clicker}
            >
              2
            </button>
            <button
              className={num === "3" ? "open" : "close"}
              value={3}
              onClick={clicker}
            >
              3
            </button>
          </div>
          <div className="info-data">
            <h4>the terminology ...</h4>
            <div className="ship-data">
              {num === "1" ? (
                <div className="infos">
                  <h1 className="tech-name">launch vehicle</h1>
                  <p>
                    A launch vehicle or carrier rocket is a rocket-propelled
                    vehicle used to carry a payload from Earth's surface to
                    space, usually to Earth orbit or beyond. Our WEB-X carrier
                    rocket is the most powerful in operation. Standing 150
                    metres tall, it's quite an awe-inspiring sight on the launch
                    pad!
                  </p>
                </div>
              ) : num === "2" ? (
                <div className="infos">
                  <h1 className="tech-name">spaceport</h1>
                  <p>
                    A spaceport or cosmodrome is a site for launching (or
                    receiving) spacecraft, by analogy to the seaport for ships
                    or airport for aircraft. Based in the famous Cape Canaveral,
                    our spaceport is ideally situated to take advantage of the
                    Earth's rotation for launch.
                  </p>
                </div>
              ) : (
                <div className="infos">
                  <h1 className="tech-name">space capsule</h1>
                  <p>
                    A space capsule is an often-crewed spacecraft that uses a
                    blunt-body reentry capsule to reenter the Earth's atmosphere
                    without wings. Our capsule is where you'll spend your time
                    during the flight. It includes a space gym, cinema, and
                    plenty of other activities to keep you entertained.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <picture className="image">
          <source media="(max-width:1330px)" srcSet={evaluate2()} />

          <img src={evaluate()} alt="vehicle" />
        </picture>
      </div>
    </div>
  );
};

export default Technology;
