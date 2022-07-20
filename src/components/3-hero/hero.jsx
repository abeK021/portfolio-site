//  REACT STUFF
import React from "react";

// NPM MODULES
import Typed from "react-typed";
import Fade from "react-reveal/Fade";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// css
import "./hero.css";

const Hero = () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  console.log();
  return (
    <div className="hero-container">
      <Typed
        showCursor={false}
        strings={[
          '<div class="typed"><span class="console">console</span>.<span class="log">log</span>(<span class="greeting">greeting</span>);</div>',
        ]}
        typeSpeed={125}
      />
      <Fade left delay={4900} duration={1200}>
        <div className="greet --1">
          Hello, <br /> I engineer solutions to problems through software.
        </div>
      </Fade>
      <Fade delay={6400} duration={3000}>
        <div className="greet --2">Welcome to my page!</div>
      </Fade>
      <Particles
        id="tsparticles"
        className="particles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 125,
                duration: 0.3,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },

            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 500,
              },
              value: 100,
            },
            opacity: {
              value: 0.4,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1.5, max: 5 },
            },
          },
          detectRetina: true,
          fullScreen: { enable: false },
        }}
      />
    </div>
  );
};

export default Hero;
