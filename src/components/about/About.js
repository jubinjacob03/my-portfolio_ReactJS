import React from "react";
import "./about.css";
import Me from "../../assets/avatar_2.jpg";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-container grid">
        <img
          src={Me}
          alt=""
          className="about-img"
          style={{ borderRadius: "10%", zIndex: "1"}}
        />
        <div className="about-data grid">
          <div className="about-info">
            <p className="about-description">
              I am Jubin Jacob, B . Tech CSE ( Cyber Security & IOT ) student
              from the city of Adoor, Kerala, India. Pursuing my  Bachelor of
              Technology ( 21 - 25 Batch ) from Sri Ramachandra Faculty of
              Engineering and Technology, Porur, Chennai . Interested in fields
              of Cyber Security ,  AI ,  Cloud ,  ML ,  DL  &  IOT. I also work
              on Mobile App Development and Front-End /Back-End for fun. Open to
              collaborating on Interesting and Innovative projects. Feel free to
              contact.
              <br /> Ciao ✌️.
            </p>
            <a
              href="https://drive.google.com/file/d/1xn4-Jf_1ZLF6LTyvtQBAPI_vaycrP0sR/view?usp=sharing"
              className="btn"
            >
              Download Resume
            </a>
          </div>
          <div className="about-skills grid">
            <div className="skills-data">
              <div className="skills-titles">
                <h3 className="skills-name">Cyber / IOT</h3>
                <span className="skills-number ">35%</span>
              </div>
              <div className="skills-bar">
                <span className="skills-percentage cyber-iot"></span>
              </div>
            </div>

            <div className="skills-data">
              <div className="skills-titles">
                <h3 className="skills-name">Front-End</h3>
                <span className="skills-number">85%</span>
              </div>
              <div className="skills-bar">
                <span className="skills-percentage front-end"></span>
              </div>
            </div>

            <div className="skills-data">
              <div className="skills-titles">
                <h3 className="skills-name">Full Stack</h3>
                <span className="skills-number">45%</span>
              </div>
              <div className="skills-bar">
                <span className="skills-percentage full-stack"></span>
              </div>
            </div>

            <div className="skills-data">
              <div className="skills-titles">
                <h3 className="skills-name">AI /ML /DL</h3>
                <span className="skills-number">60%</span>
              </div>
              <div className="skills-bar">
                <span className="skills-percentage ai-ml-dl"></span>
              </div>
            </div>

            <div className="skills-data">
              <div className="skills-titles">
                <h3 className="skills-name">Mobile Apps / Android / OS</h3>
                <span className="skills-number">75%</span>
              </div>
              <div className="skills-bar">
                <span className="skills-percentage mobile-andro-os"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
