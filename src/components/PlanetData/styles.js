import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up("md")]: {
    title: {
      fontSize: 80,
      margin: "53px 0px 13px 0px",
    },
    description: {
      fontSize: "0.83rem",
      minHeight: 129,
    },
    source: {
      fontSize: "0.83rem",
    },
  },
  [theme.breakpoints.only("sm")]: {
    title: {
      fontSize: 50,
      margin: 0,
    },
    description: {
      fontSize: "0.66rem",
      minHeight: 110,
    },
    source: {
      fontSize: "0.66rem",
    },
  },

  [theme.breakpoints.only("xs")]: {
    title: {
      marginBottom: 14,
      marginTop: 53,
      fontSize: "3rem",
      textAlign: "center",
    },
    description: {
      textAlign: "center",
      fontSize: "0.8rem",
      minHeight: 126,
    },
    source: {
      textAlign: "center",
      fontSize: "0.8rem",
    },
  },

  description: {
    fontFamily: "Spartan, sans-serif",
    color: "rgba(255,255,255,0.75)",
    display: "flex",
    alignItems: "center",
  },
  source: {
    color: "rgba(255,255,255,0.5)",
    fontFamily: "Spartan",
  },
  link: {
    color: "rgba(255,255,255,0.75)",
  },
  data: {
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
}));

export { useStyles };
