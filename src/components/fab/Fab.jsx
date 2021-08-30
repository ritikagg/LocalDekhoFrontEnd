import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import "./fab.css";
// import AddService from "../form/AddService";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

// const [clicked, setClicked] = ueState(false);

const FloatingActionButtons = (props) => {
  const fabClickHandler = () => {
    props.handle(true);
  };

  const classes = useStyles();

  return (
    <div className={classes.root} onClick={fabClickHandler}>
      <Fab
        color="primary"
        aria-label="add"
        variant="extended"
        className="fab-btn"
      >
        Add New Service
      </Fab>
    </div>
  );
};

export default FloatingActionButtons;
