import React, { useState, useEffect } from "react";
import "./crew.css";
import douglas from "../../assets/crew/image-douglas-hurley.png";
import mark from "../../assets/crew/image-mark-shuttleworth.png";
import victor from "../../assets/crew/image-victor-glover.png";
import anousheh from "../../assets/crew/image-anousheh-ansari.png";

// import { useState } from "react";
const Crew = () => {
  const [member, setMember] = useState("01");
  const handler = () => {
    if (member === "01") return douglas;
    else if (member === "02") return mark;
    else if (member === "03") return victor;
    else if (member === "04") return anousheh;
  };

  const updater = (e) => {
    setMember(e.target.value.toString());
    // console.log(member);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (member === "01") {
        setMember("02");
      } else if (member === "02") {
        setMember("03");
      } else if (member === "03") {
        setMember("04");
      } else setMember("01");
    }, 10000);
    return () => clearTimeout(timer);
  }, [member]);

  return (
    <div className="crew">
      <div className="first">
        <h1 className="heading">
          <span>02 </span>meet your crew
        </h1>

        <div className="about">
          {member === "01" ? (
            <div className="data">
              <h2 className="role">Commander </h2>
              <h3 className="name">Douglas Hurley</h3>
              <p className="more">
                Douglas Gerald Hurley is an American engineer, former Marine
                Corps pilot and former NASA astronaut. He launched into space
                for the third time as commander of Crew Dragon Demo-2.
              </p>
            </div>
          ) : member === "02" ? (
            <div className="data">
              <h2 className="role">Mission Specialist </h2>
              <h3 className="name">MARK SHUTTLEWORTH</h3>
              <p className="more">
                Mark Richard Shuttleworth is the founder and CEO of Canonical,
                the company behind the Linux-based Ubuntu operating system.
                Shuttleworth became the first South African to travel to space
                as a space tourist.
              </p>
            </div>
          ) : member === "03" ? (
            <div className="data">
              <h2 className="role">PILOT</h2>
              <h3 className="name">Victor Glover</h3>
              <p className="more">
                Pilot on the first operational flight of the SpaceX Crew Dragon
                to the International Space Station. Glover is a commander in the
                U.S. Navy where he pilots an F/A-18.He was a crew member of
                Expedition 64, and served as a station systems flight engineer.
              </p>
            </div>
          ) : (
            <div className="data">
              <h2 className="role">Flight Engineer</h2>
              <h3 className="name">Anousheh Ansari</h3>
              <p className="more">
                Anousheh Ansari is an Iranian American engineer and co-founder
                of Prodea Systems. Ansari was the fourth self-funded space
                tourist, the first self-funded woman to fly to the ISS, and the
                first Iranian in space.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="slider">
        <button
          onClick={updater}
          className={"btn " + (member === "01" ? "actively" : "inactively")}
          value="01"
        ></button>
        <button
          onClick={updater}
          className={"btn " + (member === "02" ? "actively" : "inactively")}
          value="02"
        ></button>
        <button
          onClick={updater}
          className={"btn " + (member === "03" ? "actively" : "inactively")}
          value="03"
        ></button>
        <button
          onClick={updater}
          className={"btn " + (member === "04" ? "actively" : "inactively")}
          value="04"
        ></button>
      </div>
      <div className="second">
        <img className="crew-image" src={handler()} alt="crew" />
      </div>
    </div>
  );
};

export default Crew;
