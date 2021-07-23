import { AppBar, Hidden, Tab, Tabs } from "@material-ui/core";
import { useStyles } from "./styles.js";
import React, { useState } from "react";

const PlanetMenu = ({ setPlanetImg, planetImg, planet }) => {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const data = {
    overview: "planet",
    structure: "internal",
    surface: "geology",

    planet: "OVERVIEW",
    internal: "INTERNAL STRUCTURE",
    geology: "SURFACE GEOLOGY",
  };

  return (
    <>
      <Hidden xsDown>
        <ul className={classes.ul}>
          {["planet", "internal", "geology"].map((e, eIdx) => (
            <li
              key={eIdx}
              onClick={() =>
                setPlanetImg((prevState) => ({ ...prevState, type: e }))
              }
              className={`${classes.li} ${
                planetImg === e ? classes[planet] : classes.hover
              }`}
            >
              <span className={classes.number}>{`0${eIdx + 1}`}</span>
              <a className={classes.text} href="#/">
                {data[e]}
              </a>
            </li>
          ))}
        </ul>
      </Hidden>
      <Hidden smUp>
        <AppBar
          classes={{
            root: classes.appBarRoot,
            colorPrimary: classes.colorPrimary,
          }}
        >
          <Tabs
            classes={{ flexContainer: classes.flexContainer }}
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{ className: classes[planet] }}
          >
            {["overview", "structure", "surface"].map((e, eIdx) => (
              <Tab
                onClick={() =>
                  setPlanetImg((prevState) => ({
                    ...prevState,
                    type: data[e],
                  }))
                }
                classes={{ root: classes.tabRoot }}
                key={eIdx}
                label={e}
              />
            ))}
          </Tabs>
        </AppBar>
      </Hidden>
    </>
  );
};

export default PlanetMenu;
