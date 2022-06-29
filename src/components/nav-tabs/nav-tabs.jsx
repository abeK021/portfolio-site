import React, { useState } from "react";

// Material UI
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

// CSS
import "./nav-tabs.css";
import { useEffect } from "react";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 60,
    width: "100%",
    backgroundColor: "#FF784F",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),

    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-selected": {
      color: "#fff",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

const ScrollableTabs = () => {
  const [value, setValue] = React.useState(0);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset === 0) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
    };
  }, []);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const scrollClass = scrolling && "scrolled";
  const scrollingClass = `nav-tab-container ${scrollClass}`;

  return (
    <Box sx={{ width: "100%" }} className={scrollingClass}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ bgcolor: "#2f2f2f" }}
      >
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <StyledTab label="Home" />
          <StyledTab label="About" />
          <StyledTab label="Projects" />
          <StyledTab label="Skills" />
        </StyledTabs>
      </Box>
      <Divider sx={{ bgcolor: "white" }} />
    </Box>
  );
};

export default ScrollableTabs;
