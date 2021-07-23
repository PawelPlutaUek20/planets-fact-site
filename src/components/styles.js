import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up("md")]: {
    container: {
      minHeight: "calc(100vh - 76.66px)",
    },
  },
  [theme.breakpoints.only("sm")]: {
    container: {
      minHeight: "calc(100vh - 152px)",
      paddingTop: 53,
    },
    main: {
      alignItems: "center",
    },
    image: {},
    data: {
      padding: 10,
      paddingRight: 20,
    },
    menu: {
      alignContent: "flex-start",
      padding: "0.6rem 10px 0.6rem 20px",
    },
    infos: {
      paddingBottom: 5,
      paddingTop: 24,
      position: "relative",
    },
    article: {
      paddingTop: 24,
    },
  },
  [theme.breakpoints.only("xs")]: {
    container: {
      minHeight: "calc(100vh - 76.66px)",
      paddingTop: 103,
    },
    menu: {
      position: "absolute",
      top: 62,
      left: 0,
      minWidth: 320,
    },
  },
  container: {
    display: "flex",
    alignContent: "center",
  },
  image: {
    position: "relative",
  },
  wrapper: {
    minHeight: "100vh",
    minWidth: 320,
  },
}));

export { useStyles };
