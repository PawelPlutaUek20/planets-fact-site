import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  Mercury: {
    background: "#419EBB",
  },
  Venus: {
    background: "#EDA249",
  },
  Earth: {
    background: "#6D2ED5",
  },
  Mars: {
    background: "#D14C32",
  },
  Jupiter: {
    background: "#D83A34",
  },
  Saturn: {
    background: "#CD5120",
  },
  Uranus: {
    background: "#1EC1A2",
  },
  Neptune: {
    background: "#2D68F0",
  },
  hover: {
    background: "transparent",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.2)",
    },
  },
  ul: {
    width: "100%",
    height: "100%",
    listStyle: "none",
    padding: 0,
  },
  li: {
    height: 50,
    border: "1px solid rgba(255,255,255,0.2)",
    padding: 15,
    marginBottom: 10,
    cursor: "pointer",
  },
  text: {
    color: "white",
    fontFamily: "Spartan",
    textDecoration: "none",
    fontSize: "0.75rem",
    fontWeight: 700,
    letterSpacing: 2,
  },
  number: {
    padding: "0px 40px 0px 20px",
    color: "rgba(255,255,255,0.5)",
  },
}));

const PlanetMenu = ({ setPlanetImg, planetImg, planet }) => {
  const classes = useStyles();

  return (
    <ul className={classes.ul}>
      <li
        onClick={() =>
          setPlanetImg((prevState) => ({ ...prevState, type: "planet" }))
        }
        className={`${classes.li} ${
          planetImg === "planet" ? classes[planet] : classes.hover
        }`}
      >
        <span className={`${classes.text} ${classes.number}`}>01</span>
        <a className={classes.text} href="#/">
          OVERVIEW
        </a>
      </li>
      <li
        onClick={() =>
          setPlanetImg((prevState) => ({ ...prevState, type: "internal" }))
        }
        className={`${classes.li} ${
          planetImg === "internal" ? classes[planet] : classes.hover
        }`}
      >
        <span className={`${classes.text} ${classes.number}`}>02</span>
        <a className={classes.text} href="#/">
          INTERNAL STRUCTURE
        </a>
      </li>
      <li
        className={`${classes.li} ${
          planetImg === "geology" ? classes[planet] : classes.hover
        }`}
        onClick={() =>
          setPlanetImg((prevState) => ({ ...prevState, type: "geology" }))
        }
      >
        <span className={`${classes.text} ${classes.number}`}>03</span>
        <a className={classes.text} href="#/">
          SURFACE GEOLOGY
        </a>
      </li>
    </ul>
  );
};

export default PlanetMenu;
