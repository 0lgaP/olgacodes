import React, { useState } from "react";
import "./about.css";
import olga from "../../assets/bluehair.png";
import olga_head from "../../assets/olga_head.png";

const About = () => {
  const [over, setOver] = useState(false);
  return (
    <section id="about">
      <div className="about__container">
        <div
          className="about__me"
          onMouseOver={() => setOver(true)}
          onMouseOut={() => setOver(false)}
        >
          <img
            className={over ? "about__me-image" : "about__me-cartoon"}
            src={over ? olga_head : olga}
            alt=""
          />
        </div>
        <div className="about__content">
          <p>
          Howdy ya’ll, 
I am AlienToronto, an artist specializing in acrylic paintings which inspect the Toronto-coded similarities between mundane and cosmic. I'm looking to paint up your wall, garage or fence real nice! This summer I am looking to take my art to the public, and if you are here  score I'm nailing it so far!

          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
