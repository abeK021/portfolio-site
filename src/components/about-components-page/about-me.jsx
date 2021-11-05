import React from "react";
import { Fade } from "react-reveal";
import profilePic from "../../externals/profile-pic.jpeg";
import "../../styling/about-me.css";

import { ImageContainer } from "../../styling/styled-components";

const AboutMeBody = () => {
  return (
    <Fade bottom>
      <ImageContainer>
        <img src={profilePic} alt="profile-pic" />
      </ImageContainer>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
        iusto sequi totam numquam qui voluptates minima voluptatum sed
        exercitationem incidunt obcaecati ducimus cupiditate dolorem, ad
        voluptas ab dolorum ipsa dignissimos?
      </p>
    </Fade>
  );
};

export default AboutMeBody;
