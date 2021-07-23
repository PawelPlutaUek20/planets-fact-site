import { Zoom } from "@material-ui/core";
import { useStyles } from "./styles.js";
import React, { useRef } from "react";

const importAll = (require) =>
  require.keys().reduce((acc, next) => {
    acc[next.replace("./", "")] = require(next);
    return acc;
  }, {});

const images = importAll(
  require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);

const PlanetImage = ({ planet }) => {
  const classes = useStyles();
  const refPlanet = useRef(planet);
  refPlanet.current = planet;

  switch (planet.type) {
    case "planet":
      return (
        <img
          className={classes.img}
          alt="planet"
          src={images[refPlanet.current.images.planet].default}
        />
      );
    case "internal":
      return (
        <img
          className={classes.img}
          alt="internal"
          src={images[refPlanet.current.images.internal].default}
        />
      );
    case "geology":
      return (
        <>
          <Zoom in={true}>
            <img
              className={classes.geology}
              alt="geology"
              src={images[refPlanet.current.images.geology].default}
            />
          </Zoom>
          <img
            className={`${classes.planet} ${classes.img}`}
            alt="geology"
            src={images[refPlanet.current.images.planet].default}
          />
        </>
      );
    default:
      return (
        <img
          alt="planet"
          src={images[refPlanet.current.images.planet].default}
        />
      );
  }
};

export default PlanetImage;
