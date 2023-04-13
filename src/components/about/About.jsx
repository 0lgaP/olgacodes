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
          My background in developing and deploying public programs helps me communicate effectively and accurately ascertain client needs. I am a creative problem solver and take care to write clean modular code. I aim to deliver products that put user experience at the forefront.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
