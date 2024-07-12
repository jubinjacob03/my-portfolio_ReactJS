import React from "react";
import { GlowingStarsCard } from "./GlowingStars";
import Contact from "./Contact";

const GlowingDots = () => {
  return (
    <div className="relative w-full h-full mt-28">
      <GlowingStarsCard delay={0.5} />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-10">
        <Contact />
      </div>
    </div>
  );
};

export default GlowingDots;
