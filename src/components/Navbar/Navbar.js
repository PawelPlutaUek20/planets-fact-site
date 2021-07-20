import React from "react";

const Navbar = ({ planets, setPlanet }) => {
  return (
    <nav>
      <h2>THE PLANETS</h2>
      <ul>
        {planets.map((planet, planetIdx) => (
          <li key={planetIdx}>
            <a
              href="#/"
              onClick={() =>
                setPlanet(planets.find((e) => e.name === planet.name))
              }
            >
              {planet.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
