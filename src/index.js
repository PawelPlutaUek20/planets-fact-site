import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
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
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
