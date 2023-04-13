import React from "react";
import "./experience.css";
import { FullDevExperience } from "./experiance.tsx";
import { DevSkills, SoftSkills, ArtSkills } from "./resume";

const ExperienceBlock = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <article className="container experience__container">
        <div>
          <h3>Frontend Development</h3>
          <ul className="experience__content">
            <FullDevExperience icon="check" skills={DevSkills} />
          </ul>
        </div>

        <div className="experience__frontend">
          <h3>Soft Skills</h3>
          <ul className="experience__content">
            <FullDevExperience icon="mic" skills={SoftSkills} />
          </ul>
        </div>

        <div className="experience__frontend">
          <h3>Illustration and UX</h3>
          <ul className="experience__content">
            <FullDevExperience icon="heart" skills={ArtSkills} />
          </ul>
        </div>
      </article>
    </section>
  );
};

export default ExperienceBlock;
