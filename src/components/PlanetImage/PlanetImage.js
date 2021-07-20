import React from "react";

const importAll = (require) =>
  require.keys().reduce((acc, next) => {
    acc[next.replace("./", "")] = require(next);
    return acc;
  }, {});

const images = importAll(
  require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);

const PlanetImage = ({ planet }) => {
  return <img alt="earth" src={images[planet].default} />;
};

export default PlanetImage;
