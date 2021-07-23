import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./styles.js";
import React from "react";

const PlanetInfos = ({ planet }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.infoContainer}>
        <Typography className={classes.infoKey}>ROTATION TIME</Typography>
        <Typography className={classes.infoValue}>{planet.rotation}</Typography>
      </Grid>
      <Grid item xs={12} className={classes.infoContainer}>
        <Typography className={classes.infoKey}>REVOLUTION TIME</Typography>
        <Typography className={classes.infoValue}>
          {planet.revolution}
        </Typography>{" "}
      </Grid>
      <Grid item xs={12} className={classes.infoContainer}>
        <Typography className={classes.infoKey}>RADIUS</Typography>
        <Typography className={classes.infoValue}>{planet.radius}</Typography>
      </Grid>
      <Grid item xs={12} className={classes.infoContainer}>
        <Typography className={classes.infoKey}>AVERAGE TEMP.</Typography>
        <Typography className={classes.infoValue}>
          {planet.temperature}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PlanetInfos;
