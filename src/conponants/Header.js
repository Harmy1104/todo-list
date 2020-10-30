import {
  AppBar,
  makeStyles,
  Switch,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Brightness3, WbSunny } from "@material-ui/icons";
import React, { useState } from "react";

const Header = ({ onThemeToggleClick }) => {
  const useStyles = makeStyles({
    themeToggle: {
      display: "flex",
      alignItems: "center",
    },
    appBar: {
      backgroundColor: "#ff0000",
    },
  });
  let [isThemeToggleChecked, setIsThemeToggleChecked] = useState(false);
  const setTheme = () => {
    setIsThemeToggleChecked((isThemeToggleChecked = !isThemeToggleChecked));
    onThemeToggleClick(isThemeToggleChecked);
  };

  const classes = useStyles();
  return (
    <div>
      <AppBar color={classes.appBar}>
        <Toolbar>
          <Typography component="div" className={classes.themeToggle}>
            <Brightness3 />
            <Switch checked={isThemeToggleChecked} onChange={setTheme} />
            <WbSunny />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
