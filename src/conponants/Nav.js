import {
  Grid,
  makeStyles,
  Switch,
  Typography,
  withStyles,
} from "@material-ui/core";
import { blue, grey } from "@material-ui/core/colors";
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
    <Grid container justify="space-evenly" alignItems="center" xs={12}>
      <Grid item>
        <Typography variant="h2">Todo List App</Typography>
      </Grid>
      <Grid item>
        <div className={style.toggleContainer}>
          <Brightness3 className={style.mobile.icons} />
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

// custom switch
const Toggle = withStyles({
  switchBase: {
    color: blue[500],
    "&$checked": {
      color: blue[500],
    },
    "&$checked + $track": {
      backgroundColor: grey[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

// CSS
const useStyles = makeStyles((theme) => ({
  toggleContainer: {
    display: "flex",
    alignItems: "center",
  },
  toggleRoot: {
    color: blue[500],
    "&$checked": {
      color: blue[500],
    },
    "&$checked + $track": {
      backgroundColor: grey[500],
    },
  },
  mobile: {
    icons: {
      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
      },
    },
  },
}));

export default Nav;
