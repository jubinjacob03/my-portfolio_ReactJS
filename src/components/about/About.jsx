import React from "react";
import "./about.css";
import Me from "../../assets/avatar_2.jpg";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img
          src={Me}
          alt=""
          className="about__img"
          style={{ borderRadius: "10%" }}
        />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Jubin Jacob, B . Tech CSE ( Cyber Security & IOT ) student
              from the city of Adoor, Kerala, India. Currently pursuing my
               Bachelor of Technology ( 2021 - 25 Batch ) from Sri Ramachandra
              Faculty of Engineering and Technology, Porur, Chennai . Interested
              in fields of Cyber Security ,  AI ,  ML ,  DL  &  IOT. I also work
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
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Cyber / IOT</h3>
                <span className="skills__number ">35%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage cyber__iot"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Front-End</h3>
                <span className="skills__number">85%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage front__end"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Full Stack</h3>
                <span className="skills__number">45%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage full__stack"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">AI /ML /DL</h3>
                <span className="skills__number">60%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ai__ml__dl"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Mobile Apps / Android / OS</h3>
                <span className="skills__number">75%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage mobile__andro__os"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
