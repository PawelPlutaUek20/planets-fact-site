import { useStyles } from "./styles.js";
import React from "react";
import { Grid, Typography } from "@material-ui/core";

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
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      className={classes.data}
    >
      <Typography component="h1" variant="h1" classes={{ h1: classes.title }}>
        {planet.name}
      </Typography>
      <Typography variant="body1" classes={{ body1: classes.description }}>
        {planet[data].content}
      </Typography>
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
    </Grid>
  );
};

export default PlanetData;
