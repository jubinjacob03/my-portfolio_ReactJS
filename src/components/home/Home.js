import React from "react";
import "./home.css";
import Me from "../../assets/avatar_1.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section
      className="relative min-h-[100vh] flex items-center justify-center container"
      id="home"
    >
      <div className="max-w-[540px] text-center p-[5rem] rounded-lg flex flex-col items-center justify-center content-center">
        <img
          src={Me}
          alt=""
          className="mb-6 h-[100px] w-[100px] rounded-full"
        />
        <h1 className="home-name">Jubin Jacob</h1>
        <span className="home-education">I'm a B.Tech CSE Student</span>
        <HeaderSocials />
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=jr.jubin03@gmail.com"
          target="_blank"
          rel="noreferrer"
          class="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
        >
          <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-amber-500 opacity-[3%]"></span>
          <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-amber-500 opacity-100 group-hover:-translate-x-8"></span>
          <span class="relative w-full text-left text-amber-500 transition-colors duration-200 ease-in-out group-hover:text-gray-900">
            Need to Talk ?
          </span>
          <span class="absolute inset-0 border-2 border-amber-500 rounded-full"></span>
        </a>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
