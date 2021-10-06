import react, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faGit } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import resume from "../documents/Software-Resume.pdf";
import "./links-component.css";

const IconLinks = ({ theme }) => {
  return (
    <>
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
              href={resume}
              target="_blank"
              rel="noreferrer"
              className={theme === "dark" ? " dark" : " light"}
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default IconLinks;
