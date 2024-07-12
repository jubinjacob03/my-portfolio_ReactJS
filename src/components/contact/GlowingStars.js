import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

const GlowingStarsCard = ({ className, children }) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setMouseEnter(true);
      }}
      onMouseLeave={() => {
        setMouseEnter(false);
      }}
      className={clsx("bg-transparent p-4 h-full w-full rounded-xl", className)}
    >
      <div className="flex justify-center items-center">
        <Illustration mouseEnter={mouseEnter} />
      </div>
      <div className="px-2 pb-6">{children}</div>
    </div>
  );
};

const Illustration = ({ mouseEnter }) => {
  const stars = 144;
  const columns = 18;

  const [glowingStars, setGlowingStars] = useState([]);

  const highlightedStars = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      highlightedStars.current = Array.from({ length: 5 }, () =>
        Math.floor(Math.random() * stars)
      );
      setGlowingStars([...highlightedStars.current]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-[30rem] p-1 w-3/4"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `1px`,
      }}
    >
      {[...Array(stars)].map((_, starIdx) => {
        const isGlowing = glowingStars.includes(starIdx);
        const delay = (starIdx % 10) * 0.1;
        const staticDelay = starIdx * 0.01;
        return (
          <div
            key={`matrix-col-${starIdx}}`}
            className="relative flex items-center justify-center"
          >
            <Star
              isGlowing={mouseEnter ? true : isGlowing}
              delay={mouseEnter ? staticDelay : delay}
            />
            {mouseEnter && <Glow delay={staticDelay} />}
            <AnimatePresence>
              {isGlowing && <Glow delay={delay} />}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

const Star = ({ isGlowing, delay }) => {
  return (
    <motion.div
      key={delay}
      initial={{
        scale: 1,
      }}
      animate={{
        scale: isGlowing ? [1, 1.2, 2.5, 2.2, 1.5] : 1,
        background: isGlowing ? "#f59e0b" : "#666",
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        delay: delay,
      }}
      className={clsx("bg-gray-600 h-1 w-1 rounded-full relative z-20")}
    ></motion.div>
  );
};

const Glow = ({ delay }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        delay: delay,
      }}
      exit={{
        opacity: 0,
      }}
      className="absolute left-1/2 transform -translate-x-1/2 z-10 h-2 w-2 rounded-full bg-amber-500 blur-[1px] shadow-2xl shadow-yellow-400"
    />
  );
};

export { GlowingStarsCard };
