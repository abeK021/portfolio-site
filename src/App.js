// React stuff
import React from "react";
// COMPONENTS
import Heading from "./components/heading/heading.jsx";
import ScrollableTabs from "./components/nav-tabs/nav-tabs.jsx";
import Hero from "./components/hero/hero.jsx";

const App = () => {
  return (
    <>
      <Heading />
      <ScrollableTabs />
      <Hero />
    </>
  );
};

export default App;
