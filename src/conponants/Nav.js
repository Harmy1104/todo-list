import { Grid, makeStyles, Switch, Typography } from "@material-ui/core";
import { Brightness3, WbSunny } from "@material-ui/icons";
import React, { useState } from "react";

const Nav = ({ onThemeToggleClick }) => {
  let [isThemeToggleChecked, setIsThemeToggleChecked] = useState(false);
  const setTheme = (event) => {
    setIsThemeToggleChecked((isThemeToggleChecked = event.target.checked));
    onThemeToggleClick(isThemeToggleChecked);
  };

  const style = useStyles();
  return (
    <Grid container justify="space-evenly" alignItems="center">
      <Grid item>
        <Typography variant="h2">Todo List App</Typography>
      </Grid>
      <Grid item>
        <div className={style.toggleContainer}>
          <Brightness3 />
          <Switch
            color="primary"
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
const useStyles = makeStyles((theme) => ({
  toggleContainer: {
    display: "flex",
    alignItems: "center",
  },
}));

export default Nav;
