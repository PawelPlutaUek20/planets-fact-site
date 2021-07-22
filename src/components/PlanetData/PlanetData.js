import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 80,
    margin: "53px 0px 0px 0px",
  },
  description: {
    fontFamily: "Spartan, sans-serif",
    fontSize: "0.83rem",
    color: "rgba(255,255,255,0.75)",
    minHeight: 126,
    display: "flex",
    alignItems: "center",
  },
  source: {
    color: "rgba(255,255,255,0.5)",
    fontFamily: "Spartan",
    fontSize: "0.83rem",
  },
  link: {
    color: "rgba(255,255,255,0.75)",
  },
  data: {
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
}));

const PlanetData = ({ planet, planetImg }) => {
  const classes = useStyles();
  const data =
    planetImg === "planet"
      ? "overview"
      : planetImg === "internal"
      ? "structure"
      : planetImg === "geology"
      ? "geology"
      : "planet";

  return (
    <div className={classes.data}>
      <h1 className={classes.title}>{planet.name}</h1>
      <p className={classes.description}>{planet[data].content}</p>
      <p className={classes.source}>
        Source: &nbsp;
        <a className={classes.link} href={planet[data].source}>
          Wikipedia
        </a>
      </p>
    </div>
  );
};

export default PlanetData;
