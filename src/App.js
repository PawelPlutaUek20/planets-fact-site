import { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import PlanetData from "./components/PlanetData/PlanetData";
import PlanetImage from "./components/PlanetImage/PlanetImage";
import PlanetInfos from "./components/PlanetInfos/PlanetInfos";
import PlanetMenu from "./components/PlanetMenu/PlanetMenu";

import backgroundStars from "./assets/background-stars.svg";
import data from "./static/data.json";

function App() {
  const [planet, setPlanet] = useState(() =>
    data.find((planet) => planet.name === "Earth")
  );
  const [planetImg, setPlanetImg] = useState(() => planet.images.planet);

  useEffect(() => {
    setPlanetImg(planet.images.planet);
  }, [planet]);

  return (
    <div style={{ backgroundImage: `url(${backgroundStars})` }}>
      <Navbar planets={data} setPlanet={setPlanet} />
      <PlanetImage planet={planetImg} />
      <PlanetData planet={planet} />
      <PlanetMenu planet={planet.images} setPlanetImg={setPlanetImg} />
      <PlanetInfos planet={planet} />
    </div>
  );
}

export default App;
