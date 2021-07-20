import React from "react";

const PlanetMenu = ({ planet, setPlanetImg }) => {
  return (
    <ul>
      <li>
        <a href="#/" onClick={() => setPlanetImg(planet.planet)}>
          OVERVIEW
        </a>
      </li>
      <li>
        <a href="#/" onClick={() => setPlanetImg(planet.internal)}>
          INTERNAL STRUCTURE
        </a>
      </li>
      <li>
        <a href="#/" onClick={() => setPlanetImg(planet.geology)}>
          SURFACE GEOLOGY
        </a>
      </li>
    </ul>
  );
};

export default PlanetMenu;
