import { Grid, makeStyles, Switch, Typography } from "@material-ui/core";
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
    <Grid container justify="space-around" alignItems="center" xs={12}>
      <Grid item>
        <Typography variant="h2">Todo List App</Typography>
      </Grid>
      <Grid item>
        <div className={classes.themeToggle}>
          <Brightness3 />
          <Switch
            color="secondary"
            checked={isThemeToggleChecked}
            onChange={setTheme}
          />
          <WbSunny />
        </div>
      </Grid>
    </Grid>
  );
};

// CSS
const useStyles = makeStyles({
  themeToggle: {
    display: "flex",
    alignItems: "center",
  },
});

export default Nav;
