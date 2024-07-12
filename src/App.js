import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import ParticleComponent from "./components/portfolio/particles/Particles";
import GlowingDots from "./components/contact/GlowingDots";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main className="main">
        <ParticleComponent />
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <GlowingDots />
      </main>
    </div>
  );
}

export default App;
