import React from "react";

const PlanetInfos = ({ planet }) => {
  return (
    <div>
      <div>ROTATION TIME: {planet.rotation}</div>
      <div>REVOLUTION TIME: {planet.revolution}</div>
      <div>RADIUS: {planet.radius}</div>
      <div>AVERAGE TEMPERATUR: {planet.temperature}</div>
    </div>
  );
};

export default PlanetInfos;
