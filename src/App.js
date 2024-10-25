import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/works/Portfolio";
import ParticleComponent from "./components/works/particles/Particles";
import GlowingDots from "./components/contact/GlowingDots";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main className="main">
        <ParticleComponent />
        <Home />
        <About />
        <Experience />
        <Portfolio />
        <GlowingDots />
      </main>
    </div>
  );
}

export default App;
