import React, { useState } from "react";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";

import TechUsed from "./tech-used";

const ProjectCard = (props) => {
  const [expand, setExpand] = useState(false);

  return (
    <Card
      sx={{
        marginRight: "20px",
        overflow: "clip",
        borderRadius: "10px",
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
      }}
      m={10}
      className="cards-container"
    >
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          {props.title}
        </Typography>
        <Collapse variant="body2" collapsedSize={45} in={expand}>
          <Typography sx={{ fontSize: 14 }}>
            {props.overallDescription}
          </Typography>
        </Collapse>
        <Avatar
          sx={{
            bgcolor: deepPurple[500],
            margin: "0 auto",
            cursor: "pointer",
            width: 30,
            height: 30,
            fontSize: 14,
          }}
          onClick={() => setExpand((prev) => !prev)}
        >
          {expand ? "-" : "+"}
        </Avatar>
        <Typography
          mt={2}
          sx={{ fontSize: 13 }}
          color="text.secondary"
          gutterBottom
        >
          Tech Used
        </Typography>
        <TechUsed tech={props.techUsed} />
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
