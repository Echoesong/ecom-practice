import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { themeOptions } from "./components/Theme";

const theme = createTheme(themeOptions);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Hero />
      <Main />
    </ThemeProvider>
  );
}

export default App;
