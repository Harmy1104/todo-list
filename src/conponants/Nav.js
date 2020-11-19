import { IconButton, makeStyles } from "@material-ui/core";
import { Brightness3, WbSunnyRounded } from "@material-ui/icons";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Nav = () => {
  const classes = useStyles();
  const { isDarkMode, toggleMode } = useContext(ThemeContext);

  return (
    <div className={classes.toolBar}>
      <IconButton
        className={classes.icon}
        onClick={toggleMode}
        aria-label="mode"
      >
        {isDarkMode ? <WbSunnyRounded /> : <Brightness3 />}
      </IconButton>
    </div>
  );
};

// CSS
const useStyles = makeStyles({
  toolBar: {
    display: "flex",
    width: "100vw",
    justifyContent: "flex-end",
  },
  icon: {
    marginTop: "2rem",
    marginRight: "2rem",
  },
});

export default Nav;
