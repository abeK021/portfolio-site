import * as React from "react";
import { Avatar, Stack, Typography, Collapse, Grid } from "@mui/material/";

import { deepOrange, green } from "@mui/material/colors";
import AssignmentIcon from "@mui/icons-material/Assignment";

import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material/";

const TechUsed = ({ collapse, onCollapse }) => {
  return (
    <div>
      <Typography
        sx={{
          fontSize: 18,
          fontFamily: "sans-serif",
          marginBottom: "20px",
        }}
        color="text.secondary"
        gutterBottom
      >
        Tech Used
      </Typography>

      <Collapse in={collapse} collapsedSize={60}>
        <Grid container spacing={1}>
          {[1, 2, 3, 4, 5, 6].map((i) => {
            return (
              <Grid container item xs={4} justifyContent="center">
                <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
                  {i}
                </Avatar>
                React
              </Grid>
            );
          })}
        </Grid>
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

export default TechUsed;
