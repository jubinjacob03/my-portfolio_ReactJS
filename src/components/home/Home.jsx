import React from "react";
import "./home.css";
import Me from "../../assets/avatar_1.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home-img" />
        <h1 className="home-name">Jubin Jacob</h1>
        <span className="home-education">I'm a B.Tech CSE Student</span>
        <HeaderSocials />
        <a href="#contact" className="btn">
          Need to Talk ?
        </a>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
