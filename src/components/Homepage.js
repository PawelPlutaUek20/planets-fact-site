import { Container, Grid } from "@material-ui/core";
import { useStyles } from "./styles.js";
import { useEffect, useState } from "react";

import Navbar from "./Navbar/Navbar";
import PlanetData from "./PlanetData/PlanetData";
import PlanetImage from "./PlanetImage/PlanetImage";
import PlanetInfos from "./PlanetInfos/PlanetInfos";
import PlanetMenu from "./PlanetMenu/PlanetMenu";

import data from "../static/data.json";

function App() {
  const classes = useStyles();

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
    <div className={classes.wrapper}>
      <Navbar planets={data} setPlanet={setPlanet} />
      <Container className={classes.container}>
        <Grid container className={classes.main}>
          <Grid
            item
            container
            xs={12}
            sm={12}
            md={8}
            alignContent="center"
            justifyContent="center"
            className={classes.image}
          >
            <PlanetImage planet={planetImg} />
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={12}
            md={4}
            className={classes.article}
          >
            <Grid item md={12} sm={6} xs={12} className={classes.data}>
              <PlanetData planet={planet} planetImg={planetImg.type} />
            </Grid>
            <Grid
              item
              container
              md={12}
              sm={6}
              justifyContent="center"
              alignItems="center"
              className={classes.menu}
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
            className={classes.infos}
          >
            <PlanetInfos planet={planet} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
