import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  infoKey: {
    color: "rgba(255,255,255,0.5)",
    fontFamily: "Spartan",
    fontSize: "0.7rem",
  },
  infoValue: {
    fontFamily: "Antonio",
    fontSize: "1.7rem",
  },
  infoContainer: {
    padding: "1rem",
    border: "1px solid rgba(255,255,255,0.2)",
    maxHeight: 85,
  },
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
  },
}));

const PlanetInfos = ({ planet }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} sm={2} className={classes.infoContainer}>
        <Typography className={classes.infoKey}>ROTATION TIME</Typography>
        <Typography className={classes.infoValue}>{planet.rotation}</Typography>
      </Grid>
      <Grid item xs={12} sm={2} className={classes.infoContainer}>
        <Typography className={classes.infoKey}>REVOLUTION TIME</Typography>
        <Typography className={classes.infoValue}>
          {planet.revolution}
        </Typography>{" "}
      </Grid>
      <Grid item xs={12} sm={2} className={classes.infoContainer}>
        <Typography className={classes.infoKey}>RADIUS</Typography>
        <Typography className={classes.infoValue}>{planet.radius}</Typography>
      </Grid>
      <Grid item xs={12} sm={2} className={classes.infoContainer}>
        <Typography className={classes.infoKey}>AVERAGE TEMP.</Typography>
        <Typography className={classes.infoValue}>
          {planet.temperature}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PlanetInfos;
