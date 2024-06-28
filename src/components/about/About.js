import React from "react";
import "./about.css";
import { MacbookScroll } from "./MacbookScroll";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="mb-[30rem]">
        <MacbookScroll />
      </div>
    </section>
  );
};

export default About;
