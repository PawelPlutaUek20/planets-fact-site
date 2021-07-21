import React, { useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up('md')]:{
    planets: {
      width: "fit-content",
    },
    menu: {
      justifyContent: "space-between"
    }
  },
  [theme.breakpoints.only('sm')]:{
    planets: {
      justifyContent: "center"
    },
    menu: {
      justifyContent: "center"
    }
  },
  [theme.breakpoints.only('xs')]:{
    planets: {
      display: "none"
    }
  },
  planet: {
    fontSize: "0.7rem",
    letterSpacing: "0.1em",
    fontWeight: 700,
    color: "rgba(255,255,255,0.75)",
    textTransform: "uppercase",
    minWidth: 80,
    '&:hover': {
      color: "rgba(255,255,255,1)"
    }
  },
  navBar: {
    backgroundColor: "transparent",
    borderBottom: "solid 1px rgba(255, 255, 255, 0.2)",
  },
  0: {
    background: "#419EBB",
  },
  1:{
    background: "#EDA249"
  },
  2:{
    background: "#6D2ED5"
  },
  3:{
    background: "#D14C32"
  },
  4:{
    background: "#D83A34"
  },
  5:{
    background: "#CD5120"
  },
  6:{
    background: "#1EC1A2"
  },
  7:{
    background: "#2D68F0"
  },
}));

const Navbar = ({ planets, setPlanet }) => {
  const classes = useStyles();

  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar className={classes.navBar} position="static">
      <Toolbar>
        <Grid item container alignItems="center" className={classes.menu}>
          <Grid item>
            <h2>THE PLANETS</h2>
          </Grid>
          <Grid item container className={classes.planets}>
            <Tabs TabIndicatorProps={{className:classes[value]}} value={value} onChange={handleChange}>
              {planets.map((planet, planetIdx) => (
                <Tab
                  key={planetIdx}
                  className={classes.planet}
                  onClick={() =>
                    setPlanet(planets.find((e) => e.name === planet.name))
                  }
                  label={planet.name}
                />
              ))}
            </Tabs>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
