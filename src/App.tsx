import React, { Component, useState } from "react";
import styles from "./App.module.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mbkit/button";
import { Accordion, AccordionHeader, AccordionItem, AccordionPane } from "@mbkit/accordion";
import SetupPage from "./components/setup-page/setup-page";
export const App = () => {
  
  return (
    <SetupPage/>
  );
};
export default App;