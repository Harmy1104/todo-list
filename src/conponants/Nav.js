import {
  AppBar,
  makeStyles,
  Switch,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { blueGrey, grey, orange } from "@material-ui/core/colors";
import { Brightness3, WbSunny } from "@material-ui/icons";
import React, { useState } from "react";

const Nav = ({ onThemeToggleClick }) => {
  let [isThemeToggleChecked, setIsThemeToggleChecked] = useState(false);
  const setTheme = (event) => {
    setIsThemeToggleChecked((isThemeToggleChecked = event.target.checked));
    onThemeToggleClick(isThemeToggleChecked);
  };

  const classes = useStyles();
  return (
    <AppBar color="primary" classes={{ root: classes.root }}>
      <Toolbar>
        <Typography variant="h4" className={classes.title}>
          Todo
        </Typography>
        <div className={classes.toggleContainer}>
          <Brightness3 />
          <Switch checked={isThemeToggleChecked} onChange={setTheme} />
          <WbSunny />
        </div>
      </Toolbar>
    </AppBar>
  );
};

// CSS
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#2a9d8f",
    color: "#fff",
  },
  toggleContainer: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    flexGrow: 1,
  },
}));

export default Nav;
