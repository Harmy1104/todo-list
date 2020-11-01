import {
  Checkbox,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";

const Todo = () => {
  const [isChecked, setChecked] = useState(false);
  const checkBoxHandler = () => {
    setChecked(!isChecked);
  };
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid container alignItems="center">
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
  );
};

// CSS
const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: "720px",
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(1),
  },
}));

export default Todo;
