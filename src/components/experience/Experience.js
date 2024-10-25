import React from "react";
import "./experience.css";
import Data from "./Data";
import Card from "./Card";
import { CardWrapper } from "./CardWrapper";

const Experience = () => {
  return (
    <section className="experience container section" id="experience">
      <h2 className="section-title">Experience</h2>

      <div className="experience-container grid">
        <CardWrapper>
          <div className="timeline grid">
            {Data.map((val, id) => {
              if (val.category === "education") {
                return (
                  <Card
                    key={id}
                    icon={val.icon}
                    title={val.title}
                    year={val.year}
                    desc={val.desc}
                  />
                );
              }
              return null;
            })}
          </div>
        </CardWrapper>

        <CardWrapper>
          <div className="timeline grid">
            {Data.map((val, index) => {
              if (val.category === "experience") {
                return (
                  <Card
                    key={index}
                    icon={val.icon}
                    title={val.title}
                    year={val.year}
                    desc={val.desc}
                  />
                );
              }
              return null; // Return a value for other cases
            })}
          </div>
        </CardWrapper>
      </div>
    </section>
  );
};

export default Experience;
