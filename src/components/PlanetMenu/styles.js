import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up("md")]: {
    text: {
      fontSize: "0.75rem",
      letterSpacing: 2,
    },
    number: {
      padding: "0px 30px 0px 10px",
      fontFamily: "Spartan",
      textDecoration: "none",
      fontWeight: 700,
      fontSize: "0.75rem",
      letterSpacing: 2,
    },
    li: {
      border: "1px solid rgba(255,255,255,0.2)",
    },
  },
  [theme.breakpoints.only("sm")]: {
    ul: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    text: {
      fontSize: "0.6rem",
      letterSpacing: 1.5,
    },
    number: {
      padding: "0px 30px 0px 10px",
      fontFamily: "Spartan",
      textDecoration: "none",
      fontWeight: 700,
      fontSize: "0.6rem",
      letterSpacing: 1.5,
    },
    li: {
      border: "1px solid rgba(255,255,255,0.2)",
    },
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
    padding: 15,
    marginBottom: 10,
    cursor: "pointer",
  },
  text: {
    color: "white",
    fontFamily: "Spartan",
    textDecoration: "none",
    fontWeight: 700,
  },
  number: {
    color: "rgba(255,255,255,0.5)",
  },
  appBarRoot: {
    top: 15,
    position: "absolute",
    borderBottom: "1px solid rgba(255,255,255,0.2)",
  },
  colorPrimary: {
    backgroundColor: "#070724",
  },
  flexContainer: {
    justifyContent: "space-around",
  },
  tabRoot: {
    padding: "22px 12px 20px",
    fontSize: "0.6rem",
    fontFamily: "Spartan",
    letterSpacing: "0.1rem",
    fontWeight: "bold",
  },
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
}));

export { useStyles };
