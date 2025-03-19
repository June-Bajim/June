"use client";

import React, { useCallback } from "react";
import Particles from "react-tsparticles"; 
import { loadFull } from "tsparticles";

const ParticlesBackground = ({ children }) => {
  const particlesInit = useCallback(async (engine) => {
    console.log("Initializing particles...");
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles loaded!", container);
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          style: {
            position: "absolute",
          },
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#000000",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.5,
              random: false,
            },
            size: {
              value: 3,
              random: true,
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#0000ff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
          },
          retina_detect: true,
        }}
        className="absolute inset-0"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ParticlesBackground;
