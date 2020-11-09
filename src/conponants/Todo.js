import {
  Checkbox,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Todo = ({ todo }) => {
  // CSS
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: `${theme.spacing(2)}px`,
      padding: theme.spacing(1),
    },
    todoText: {
      marginLeft: theme.spacing(2),
      opacity: todo.completed ? "0.3" : "1",
      fontWeight: todo.completed ? "100" : "200",
    },
  }));
  const classes = useStyles();

  const { markDone } = useContext(TodoContext);

  return (
    <Paper className={classes.paper}>
      <Grid container alignItems="center">
        <Grid item>
          <Checkbox
            checked={todo.completed}
            // onChange={() => markDone(todo.id)}
            onClick={() => markDone(todo.id)}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </Grid>
        <Grid item>
          <Typography variant="h6" className={classes.todoText}>
            {todo.title}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Todo;
