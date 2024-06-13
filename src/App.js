import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import ParticleComponent from "./components/portfolio/particles/Particles";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main className="main">
        <ParticleComponent/>
        <Home />
        <About />
        <Resume />
        <Portfolio />
      </main>
    </div>
  );
}

export default App;
