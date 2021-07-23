import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up("md")]: {
    img: {
      maxWidth: "60%",
    },
    geology: {
      width: "12rem",
      top: "55%",
    },
  },
  [theme.breakpoints.only("sm")]: {
    img: {
      maxWidth: "29%",
    },
    geology: {
      width: "6rem",
      top: "60%",
    },
  },
  [theme.breakpoints.only("xs")]: {
    img: {
      maxWidth: "40%",
    },
    geology: {
      width: "max(4.5rem, 15%)",
      top: "60%",
    },
  },
  geology: {
    position: "absolute",
    zIndex: 1,
  },
  planet: {
    position: "relative",
  },
}));

export { useStyles };
