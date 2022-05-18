import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import resume from "../../externals/Software-Resume.pdf";
import "../../styling/links-component.css";

import { Box, BottomNavigation, Paper } from "@mui/material";
import wave from "../../externals/svgs/wave.svg";

const IconLinks = ({ theme }) => {
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <div className="spacer"></div>
      <BottomNavigation
        sx={{ backgroundColor: "#ff5500" }}
        className={
          theme === "dark" ? `links-container-dark ` : "links-container-light"
        }
      >
        <div className="flip">
          <div className="flip-inner">
            <div
              className={
                theme === "dark" ? "flip-front dark" : "flip-front light"
              }
            >
              <FontAwesomeIcon icon={faFileLines} size="lg" />
            </div>
            <div className="flip-back">
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className={theme === "dark" ? " dark" : " light"}
              >
                Resume
              </a>
            </div>
          </div>
        </div>

        <div className="flip">
          <div className="flip-inner">
            <div
              className={
                theme === "dark" ? "flip-front dark" : "flip-front light"
              }
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </div>
            <div className="flip-back">
              <a
                href={"https://github.com/abeK021"}
                target="_blank"
                rel="noreferrer"
                className={theme === "dark" ? " dark" : " light"}
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="flip">
          <div className="flip-inner">
            <div
              className={
                theme === "dark" ? "flip-front dark" : "flip-front light"
              }
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </div>
            <div className="flip-back">
              <a
                href={"https://www.linkedin.com/in/abrahim-esseidi/"}
                target="_blank"
                rel="noreferrer"
                className={theme === "dark" ? " dark" : " light"}
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <div className="flip">
          <div className="flip-inner">
            <div
              className={
                theme === "dark" ? "flip-front dark" : "flip-front light"
              }
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </div>
            <div className="flip-back">
              <a
                href="mailto:abekaid021@gmail.com"
                target="_blank"
                rel="noreferrer"
                className={theme === "dark" ? " dark" : " light"}
              >
                <p>Email</p>
              </a>
            </div>
          </div>
        </div>
      </BottomNavigation>
    </div>
  );
};

export default IconLinks;
