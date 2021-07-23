import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up("md")]: {
    title: {
      fontSize: "6.15rem",
      margin: "53px 0px 13px 0px",
    },
    description: {
      fontSize: "0.83rem",
      minHeight: 129,
      marginTop: 13.28,
      marginBottom: 13.28,
    },
    source: {
      fontSize: "0.83rem",
    },
  },
  [theme.breakpoints.only("sm")]: {
    title: {
      fontSize: "3.85rem",
      margin: 0,
    },
    description: {
      fontSize: "0.66rem",
      minHeight: 110,
      marginTop: 10.56,
      marginBottom: 10.56,
    },
    source: {
      fontSize: "0.66rem",
    },
  },

  [theme.breakpoints.only("xs")]: {
    title: {
      marginBottom: 14,
      marginTop: 53,
      fontSize: "3.65rem",
      textAlign: "center",
    },
    description: {
      textAlign: "center",
      fontSize: "0.8rem",
      minHeight: 126,
      marginTop: 12.8,
      marginBottom: 12.8,
    },
    source: {
      textAlign: "center",
      fontSize: "0.8rem",
    },
  },
  title: {
    fontFamily: "Antonio",
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
  },
}));

export { useStyles };
