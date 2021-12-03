import React from "react";
import { Typography, Collapse } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material/";

const TitleAndDescription = ({
  onCollapse,
  collapse,
  overallDescription,
  title,
}) => {
  return (
    <div>
      <Typography
        sx={{
          fontSize: 18,
          fontFamily: "sans-serif",
        }}
        color="text.secondary"
        gutterBottom
      >
        {title}
      </Typography>

      <Collapse in={collapse} collapsedSize={60}>
        <Typography variant="body2" sx={{ padding: 1 }}>
          {overallDescription}
        </Typography>
      </Collapse>
      {collapse ? (
        <KeyboardArrowUp
          onClick={onCollapse}
          sx={{ fontSize: 30, cursor: "pointer", opacity: "60%" }}
        />
      ) : (
        <KeyboardArrowDown
          onClick={onCollapse}
          sx={{ fontSize: 30, cursor: "pointer", opacity: "60%" }}
        />
      )}
    </div>
  );
};

export default TitleAndDescription;
