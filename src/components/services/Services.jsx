import React from "react";
import "./services.css";
import { ServicesList } from "./services.tsx";
import { League, Juno, DX } from "./resume";

const Services = () => {
  return (
    <section id="workexperience">
      <h2>Experience</h2>

      <div className="container services__container">
        <ServicesList role={League} />
        <ServicesList role={Juno} />
        <ServicesList role={DX} />
      </div>
    </section>
  );
};

export default Services;
