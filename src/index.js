import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import backgroundStars from "./assets/background-stars.svg";
import { createTheme, ThemeProvider, CssBaseline } from "@material-ui/core";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 1025,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    background: {
      default: "#070724",
    },
    text: {
      primary: "white",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage: `url(${backgroundStars})`,
        },
      },
    },
    MuiTab: {
      root: {
        padding: "28px 12px",
      },
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
