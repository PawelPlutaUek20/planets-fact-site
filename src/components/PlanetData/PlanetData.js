import { useStyles } from "./styles.js";
import React from "react";

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
        <a
          className={classes.link}
          href={planet[data].source}
          target="_blank"
          rel="noreferrer"
        >
          Wikipedia
        </a>
      </p>
    </div>
  );
};

export default PlanetData;
