import React from "react";

const PlanetMenu = ({ planet, setPlanetImg }) => {
  return (
    <ul>
      <li>
        <a
          href="#/"
          onClick={() =>
            setPlanetImg((prevState) => ({ ...prevState, type: "planet" }))
          }
        >
          OVERVIEW
        </a>
      </li>
      <li>
        <a
          href="#/"
          onClick={() =>
            setPlanetImg((prevState) => ({ ...prevState, type: "internal" }))
          }
        >
          INTERNAL STRUCTURE
        </a>
      </li>
      <li>
        <a
          href="#/"
          onClick={() =>
            setPlanetImg((prevState) => ({ ...prevState, type: "geology" }))
          }
        >
          SURFACE GEOLOGY
        </a>
      </li>
    </ul>
  );
};

export default PlanetMenu;
