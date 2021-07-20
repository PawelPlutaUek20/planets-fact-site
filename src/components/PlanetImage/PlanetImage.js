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
  const refPlanet = useRef(planet);
  refPlanet.current = planet;

  switch (planet.type) {
    case "planet":
      return (
        <img
          alt="earth"
          src={images[refPlanet.current.images.planet].default}
        />
      );
    case "internal":
      return (
        <img
          alt="earth"
          src={images[refPlanet.current.images.internal].default}
        />
      );
    case "geology":
      return (
        <>
          <img
            alt="earth"
            src={images[refPlanet.current.images.geology].default}
          />
          <img
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
