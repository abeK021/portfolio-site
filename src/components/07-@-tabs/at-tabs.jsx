import React, { useRef, useState } from "react";

import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";

import Slide from "@mui/material/Slide";

import "./at-tabs.css";

import IconLinks from "./links";

const AtTabs = () => {
  const [expand, setExpand] = useState(false);
  const containerRef = useRef(null);
  return (
    <div className="at-container">
      <ArrowLeftRoundedIcon
        fontSize="large"
        sx={{
          marginRight: "-13px",
          color: "purple",
          visibility: `${!expand && "hidden"}`,
        }}
      />

      <div
        className={`at-circle ${expand ? "at-circle-open" : "at-circle-close"}`}
        ref={containerRef}
        onClick={() => setExpand((prev) => !prev)}
      >
        @
      </div>

      <ArrowRightRoundedIcon
        fontSize="large"
        sx={{
          marginLeft: "-13px",
          color: "purple",
          visibility: `${expand && "hidden"}`,
        }}
      />

      <Slide direction="right" in={expand} container={containerRef.current}>
        {IconLinks}
      </Slide>
    </div>
  );
};

export default AtTabs;
