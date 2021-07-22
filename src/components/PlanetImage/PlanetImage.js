import { makeStyles } from "@material-ui/core";
import React, { useRef } from "react";

const importAll = (require) =>
  require.keys().reduce((acc, next) => {
    acc[next.replace("./", "")] = require(next);
    return acc;
  }, {});

const images = importAll(
  require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: "60%",
  },
  geology: {
    position: "absolute",
    zIndex: 1,
    width: "12rem",
    top: "55%",
  },
  planet: {
    position: "relative",
  },
}));

const PlanetImage = ({ planet }) => {
  const classes = useStyles();
  const refPlanet = useRef(planet);
  refPlanet.current = planet;

  switch (planet.type) {
    case "planet":
      return (
        <img
          className={classes.img}
          alt="earth"
          src={images[refPlanet.current.images.planet].default}
        />
      );
    case "internal":
      return (
        <img
          className={classes.img}
          alt="earth"
          src={images[refPlanet.current.images.internal].default}
        />
      );
    case "geology":
      return (
        <>
          <img
            className={classes.geology}
            alt="earth"
            src={images[refPlanet.current.images.geology].default}
          />
          <img
            className={`${classes.planet} ${classes.img}`}
            alt="earth"
            src={images[refPlanet.current.images.planet].default}
          />
        </>
      );
    default:
      return (
        <img
          alt="earth"
          src={images[refPlanet.current.images.planet].default}
        />
      );
  }
};

export default PlanetImage;
