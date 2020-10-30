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
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: "720px",
    margin: `${theme.spacing(0.5)}px auto`,
    padding: theme.spacing(0.5),
  },
}));

const Todo = () => {
  const [isChecked, setChecked] = useState(false);
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
            <Typography component="p">this is a todo</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Todo;
