import React from "react";

const PlanetData = ({ planet }) => {
  return (
    <div>
      <h1>{planet.name}</h1>
      <p>{planet.overview.content}</p>
      <p>
        Source: <a href={planet.overview.content}>Wikipedia</a>
      </p>
    </div>
  );
};

export default PlanetData;
