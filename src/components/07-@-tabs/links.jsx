import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import resume from "../../media/Software-Resume.pdf";
import "./at-tabs.css";

import { Box, BottomNavigation, Paper } from "@mui/material";

const IconLinks = (
  <div className="links-container-light">
    <div className="flip">
      <div className="flip-inner">
        <div className="flip-front light">
          <FontAwesomeIcon icon={faFileLines} size="lg" />
        </div>
        <div className="flip-back">
          <a href={resume} target="_blank" rel="noreferrer" className="light">
            Resume
          </a>
        </div>
      </div>
    </div>

    <div className="flip">
      <div className="flip-inner">
        <div className="flip-front light">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </div>
        <div className="flip-back">
          <a
            href={"https://github.com/abeK021"}
            target="_blank"
            rel="noreferrer"
            className="light"
          >
            Github
          </a>
        </div>
      </div>
    </div>
    <div className="flip">
      <div className="flip-inner">
        <div className="flip-front light">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </div>
        <div className="flip-back">
          <a
            href={"https://www.linkedin.com/in/abrahim-esseidi/"}
            target="_blank"
            rel="noreferrer"
            className="light"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>

    <div className="flip">
      <div className="flip-inner">
        <div className="flip-front light">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </div>
        <div className="flip-back">
          <a
            href="mailto:abekaid021@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="light"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default IconLinks;
