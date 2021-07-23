import React, { useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {
  Drawer,
  Grid,
  Hidden,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./styles.js";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import LensIcon from "@material-ui/icons/Lens";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const Navbar = ({ planets, setPlanet }) => {
  const classes = useStyles();

  const [value, setValue] = useState(2);
  const [open, setOpen] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar className={classes.navBar} position="static">
        <Toolbar>
          <Grid item container alignItems="center" className={classes.menu}>
            <Grid item>
              <Typography
                variant="h2"
                component="h2"
                classes={{ h2: classes.title }}
              >
                THE PLANETS
              </Typography>
            </Grid>
            <Grid item container className={classes.planets}>
              <Tabs
                TabIndicatorProps={{ className: classes[value] }}
                value={value}
                onChange={handleChange}
              >
                {planets.map((planet, planetIdx) => (
                  <Tab
                    key={planetIdx}
                    classes={{ root: classes.planet }}
                    onClick={() =>
                      setPlanet(planets.find((e) => e.name === planet.name))
                    }
                    label={planet.name}
                  />
                ))}
              </Tabs>
            </Grid>
          </Grid>
          <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Hidden smUp>
        <Drawer
          BackdropProps={{ invisible: true }}
          PaperProps={{
            style: {
              top: 76.66,
              height: "calc(100% - 76.66px)",
              width: "100%",
              backgroundColor: "#070724",
            },
          }}
          open={open}
          anchor="left"
          onClose={handleDrawer}
        >
          <List className={classes.list}>
            {planets.map((planet, planetIdx) => (
              <ListItem
                className={classes.listItem}
                button
                key={planetIdx}
                onClick={() => {
                  setPlanet(planets.find((e) => e.name === planet.name));
                  handleDrawer();
                }}
              >
                <ListItemIcon>
                  <LensIcon classes={{ root: classes[planet.name] }} />
                </ListItemIcon>
                <ListItemText
                  primary={planet.name}
                  primaryTypographyProps={{
                    style: {
                      fontFamily: "Spartan",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      letterSpacing: "0.1rem",
                      fontSize: "0.7rem",
                    },
                  }}
                />
                <ListItemSecondaryAction className={classes.nextPage}>
                  <NavigateNextIcon
                    onClick={() => {
                      setPlanet(planets.find((e) => e.name === planet.name));
                      handleDrawer();
                    }}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Hidden>
    </>
  );
};

export default Navbar;
