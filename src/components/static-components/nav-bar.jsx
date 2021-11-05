import React, { useContext, useState } from "react";
import UserContext from "../../context-state";
//utils
import { navBarTabsColor } from "../../utils/utils";
import NavBarFade from "../../utils/fade-effect-conditional";
//config
import { navBarArray } from "../../config/nav-bar-vars";
//npm
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
// styling
import { color } from "../../styling/styled-components";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const NavTabs = () => {
  const { theme, componentsToRender, handleComponentChange } =
    useContext(UserContext);
  const [value, setValue] = useState(navBarArray.indexOf(componentsToRender));

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const innerText = event.currentTarget.innerText;
    handleComponentChange(innerText);
  };

  return (
    <NavBarFade>
      <Box sx={{ marginTop: "4px" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab sx={navBarTabsColor(theme)} label="HOME" {...a11yProps(0)} />
          <Tab sx={navBarTabsColor(theme)} label="ABOUT" {...a11yProps(1)} />
          <Tab sx={navBarTabsColor(theme)} label="PROJECTS" {...a11yProps(2)} />
          <Tab sx={navBarTabsColor(theme)} label="SKILLS" {...a11yProps(3)} />
        </Tabs>
      </Box>
    </NavBarFade>
  );
};

export default NavTabs;
