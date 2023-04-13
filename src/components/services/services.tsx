import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

interface ServiceListProps {
  employer: string;
  title: string;
  bullets: string[];
}

interface Services {
  role: ServiceListProps;
}
export const ServicesList = (props: Services) => {
  const { employer, title, bullets } = props.role;
  return (
    <figure className="service">
      <figcaption className="service__head">
        <h3>{employer}</h3>
        <small className="services__item-desc">{title}</small>
      </figcaption>
      <ul className="service__list">
        {bullets?.map((bullet) => (
          <li key={bullet}>
            <div className="service__list-icon">
              <BiCheck />
            </div>
            {bullet}
          </li>
        ))}
      </ul>
    </figure>
  );
};
