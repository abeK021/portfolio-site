import React, { useContext } from "react";
import UserContext from "../../context-state";
import { Typography, Collapse, Grid } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material/";
import { HeadingBar } from "../../styling/global-styles";

const TitleAndDescription = ({
  onCollapse,
  collapse,
  overallDescription,
  title,
  activeStep,
  index,
}) => {
  const { theme } = useContext(UserContext);

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item>
          <HeadingBar />
        </Grid>
        <Grid item>
          <Typography
            sx={{
              fontSize: 18,
              fontFamily: "sans-serif",
              color: theme === "dark" ? "#FFFFFF" : "text.secondary",
            }}
            gutterBottom
          >
            {title}
          </Typography>
        </Grid>
      </Grid>

      <Collapse in={collapse} collapsedSize={60}>
        <Typography
          variant="body2"
          sx={{
            padding: 1,
            fontSize: "12px",
            color: theme === "light" ? "black" : "#FAFAFA",
          }}
        >
          {overallDescription}
        </Typography>
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

export default TitleAndDescription;
