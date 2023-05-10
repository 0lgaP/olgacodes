import React from "react";
import "./portfolio.css";
import { data } from "./resume";
import { BsGithub } from "react-icons/bs";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, img, title, description, github, site }) => {
          return (
            <article key={id} className="portfolio__item">
              <div>
                <img src={img} alt="" className="portfolio__item-image" />
              </div>
              <h3>{title}</h3>
              <small className="portfolio__item-desc">{description}</small>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub className="portfolio__item-icon" /> Code{" "}
                </a>
                { site ? <a href={site} className='btn btn-primary' target='_blank' rel="noreferrer"> Live </a> : ''}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
