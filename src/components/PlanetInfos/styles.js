import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up("md")]: {
    infoKey: {
      fontSize: "0.7rem",
    },
    infoValue: {
      fontSize: "1.7rem",
    },
    infoContainer: {
      flexGrow: 0,
      maxWidth: "22%",
      flexBasis: "22%",
    },
  },
  [theme.breakpoints.only("sm")]: {
    infoKey: {
      fontSize: "0.45rem",
    },
    infoValue: {
      fontSize: "1.45rem",
    },
    infoContainer: {
      flexGrow: 0,
      maxWidth: "22%",
      flexBasis: "22%",
    },
  },
  [theme.breakpoints.only("xs")]: {
    infoContainer: {
      padding: "0.5rem",
      margin: 3,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    infoKey: {
      fontSize: "0.7rem",
      paddingTop: "0.5rem",
      paddingLeft: "0.5rem",
    },
    infoValue: {
      marginRight: "0.5rem",
      fontSize: "1.25rem",
    },
    container: {
      marginTop: 14,
    },
  },
  infoKey: {
    color: "rgba(255,255,255,0.5)",
    fontFamily: "Spartan",
  },
  infoValue: {
    fontFamily: "Antonio",
  },
  infoContainer: {
    padding: "1rem",
    border: "1px solid rgba(255,255,255,0.2)",
    maxHeight: 85,
  },
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    paddingBottom: 3,
  },
}));

export { useStyles };
