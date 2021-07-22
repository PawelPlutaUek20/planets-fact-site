import { Container, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import PlanetData from "./components/PlanetData/PlanetData";
import PlanetImage from "./components/PlanetImage/PlanetImage";
import PlanetInfos from "./components/PlanetInfos/PlanetInfos";
import PlanetMenu from "./components/PlanetMenu/PlanetMenu";

import data from "./static/data.json";

function App() {
  const [planet, setPlanet] = useState(() =>
    data.find((planet) => planet.name === "Earth")
  );
  const [planetImg, setPlanetImg] = useState({
    type: "planet",
    images: planet.images,
  });

  useEffect(() => {
    setPlanetImg((prevState) => ({ ...prevState, images: planet.images }));
  }, [planet]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar planets={data} setPlanet={setPlanet} />
      <Container
        maxWidth="lg"
        style={{
          display: "flex",
          alignContent: "center",
          minHeight: "calc(100vh - 76.66px)",
        }}
      >
        <Grid container>
          <Grid
            item
            container
            xs={12}
            sm={12}
            md={8}
            alignContent="center"
            justifyContent="center"
            style={{ position: "relative" }}
          >
            <PlanetImage planet={planetImg} />
          </Grid>
          <Grid item container xs={12} sm={12} md={4}>
            <Grid item md={12} sm={6} xs={12}>
              <PlanetData planet={planet} planetImg={planetImg.type} />
            </Grid>
            <Grid
              item
              container
              md={12}
              sm={6}
              justifyContent="center"
              alignItems="center"
            >
              <PlanetMenu
                setPlanetImg={setPlanetImg}
                planetImg={planetImg.type}
                planet={planet.name}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={12}
            md={12}
            justifyContent="center"
            style={{ maxHeight: "fit-content" }}
          >
            <PlanetInfos planet={planet} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
