import React, { useContext, useState } from "react";
import {
  Avatar,
  Stack,
  Typography,
  Collapse,
  Grid,
  Tooltip,
  Card,
  CardMedia,
  Paper,
} from "@mui/material/";

import { deepOrange, green } from "@mui/material/colors";
import AssignmentIcon from "@mui/icons-material/Assignment";

import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material/";
import { minHeight } from "@mui/system";
import { HeadingBar } from "../../styling/global-styles";
import UserContext from "../../context-state";

const TechUsed = ({ collapse, onCollapse, techUsed, activeStep, title }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { theme } = useContext(UserContext);
  return (
    <div hidden={activeStep !== 1}>
      <Grid container spacing={1} marginBottom={1}>
        <Grid item>
          <HeadingBar />
        </Grid>
        <Grid item>
          <Typography
            sx={{
              fontSize: 18,
              fontFamily: "sans-serif",
              color: theme === "dark" ? "white" : "text.secondary",
            }}
          >
            Tech Used
          </Typography>
        </Grid>
        <Grid item xs={2} />
        <Grid item justifyContent="flex-end">
          <Typography
            sx={{
              fontSize: 14,
              fontFamily: "sans-serif",
              color: theme === "dark" ? "white" : "text.secondary",
            }}
          >
            {title}
          </Typography>
        </Grid>
      </Grid>

      <Collapse in={collapse} collapsedSize={60}>
        <Grid
          container
          spacing={1}
          align="center"
          justifyContent="center"
          alignItems="center"
        >
          {techUsed.map((tech) => {
            return (
              <Grid key={tech.id} item xs={4} sx={{ minHeight: 90 }}>
                <Tooltip
                  title={tech.descriptionToolTip}
                  placement="top-end"
                  arrow
                  enterTouchDelay={0}
                  leaveTouchDelay={false}
                  onOpen={() => setShowTooltip(true)}
                  onClose={() => setShowTooltip(false)}
                >
                  <Avatar
                    onCltck={() => setShowTooltip(!showTooltip)}
                    sx={{
                      width: 42,
                      height: 42,
                      boxShadow: 4,
                      cursor: "pointer",
                      padding: 0.75,
                      marginBottom: 1,
                      backgroundColor: "#FFFFFF",
                    }}
                    alt={tech.title}
                    src={tech.url}
                    variant="oval"
                  />
                </Tooltip>
                <Typography
                  align="center"
                  sx={{
                    fontSize: "11px",
                    color: theme === "dark" && "#FFFFFF",
                  }}
                >
                  {tech.title}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Collapse>

      {collapse ? (
        <KeyboardArrowUp
          onClick={onCollapse}
          sx={{
            fontSize: 30,
            cursor: "pointer",
            opacity: "60%",
            color: theme === "dark" && "#FFFFFF",
          }}
        />
      ) : (
        <KeyboardArrowDown
          onClick={onCollapse}
          sx={{
            fontSize: 30,
            cursor: "pointer",
            opacity: "60%",
            color: theme === "dark" && "#FFFFFF",
          }}
        />
      )}
    </div>
  );
};

export default TechUsed;
