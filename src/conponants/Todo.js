import {
  Checkbox,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(1),
  },
}));

const Todo = () => {
  const [isChecked, setChecked] = useState(true);
  const checkBoxHandler = () => {
    setChecked(!isChecked);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item>
            <Checkbox
              checked={isChecked}
              onChange={checkBoxHandler}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </Grid>
          <Grid item>
            <Typography></Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Todo;
