import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up("md")]: {
    planets: {
      width: "fit-content",
    },
    menu: {
      justifyContent: "space-between",
    },
  },
  [theme.breakpoints.only("sm")]: {
    planets: {
      justifyContent: "center",
    },
    menu: {
      justifyContent: "center",
    },
  },
  [theme.breakpoints.only("xs")]: {
    planets: {
      display: "none",
    },
    menuButton: {
      marginRight: theme.spacing(0),
    },
    title: {
      marginLeft: theme.spacing(1.5),
    },
  },
  [theme.breakpoints.up("sm")]: {
    menuButton: {
      display: "none",
    },
  },
  planet: {
    fontSize: "0.7rem !important",
    letterSpacing: "0.1em !important",
    fontWeight: "700 !important",
    color: "rgba(255,255,255,0.75) !important",
    textTransform: "uppercase !important",
    minWidth: "80px !important",
    "&:hover": {
      color: "rgba(255,255,255,1) !important",
    },
  },
  navBar: {
    backgroundColor: "#070724",
    borderBottom: "solid 1px rgba(255, 255, 255, 0.2)",
  },
  listItem: {
    padding: "24px 0px 24px 16px",
    borderBottom: "1px solid rgba(255,255,255,0.2)",
  },
  list: {
    paddingBottom: 0,
  },
  nextPage: {
    color: "rgba(255,255,255,0.5)",
  },
  0: {
    backgroundColor: "#419EBB !important",
  },
  1: {
    backgroundColor: "#EDA249 !important",
  },
  2: {
    backgroundColor: "#6D2ED5 !important",
  },
  3: {
    backgroundColor: "#D14C32 !important",
  },
  4: {
    backgroundColor: "#D83A34 !important",
  },
  5: {
    backgroundColor: "#CD5120 !important",
  },
  6: {
    backgroundColor: "#1EC1A2 !important",
  },
  7: {
    backgroundColor: "#2D68F0 !important",
  },
  Mercury: {
    color: "#def4fc",
  },
  Venus: {
    color: "#f7cc7f",
  },
  Earth: {
    color: "#545bfe",
  },
  Mars: {
    color: "#ff6a45",
  },
  Jupiter: {
    color: "#ecad7a",
  },
  Saturn: {
    color: "#fccb6b",
  },
  Uranus: {
    color: "#65f0d5",
  },
  Neptune: {
    color: "#497efa",
  },
}));

export { useStyles };
