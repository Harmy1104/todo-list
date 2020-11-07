import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Brightness3, WbSunnyRounded } from "@material-ui/icons";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Nav = () => {
  const classes = useStyles();
  const { isDarkMode, toggleMode } = useContext(ThemeContext);

  return (
    <AppBar color="primary" classes={{ root: classes.root }}>
      <Toolbar className={classes.toolBar}>
        <Typography variant="h4" className={classes.title}>
          Todo
        </Typography>
        <IconButton onClick={toggleMode} aria-label="mode">
          <WbSunnyRounded />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

// CSS
const useStyles = makeStyles({
  root: {
    background: "#2a9d8f",
    color: "#fff",
  },
  toolBar: {
    padding: "0 4rem",
  },
  title: {
    flexGrow: 1,
  },
});

export default Nav;
