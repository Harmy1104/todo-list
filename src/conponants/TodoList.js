import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import Todo from "./Todo";

const TodoList = () => {
  const inputLabel = "Enter Todo";
  const classes = useStyles();

  let [value, setValue] = useState("");
  const { todos, addTodo } = useContext(TodoContext);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <FormControl variant="outlined" style={{ width: "100%" }}>
          <InputLabel>{inputLabel}</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            value={value}
            onChange={(event) => setValue((value = event.target.value))}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="add todo"
                  onClick={() => {
                    addTodo(value);
                    setValue((value = ""));
                  }}
                >
                  <Add />
                </IconButton>
              </InputAdornment>
            }
            label={inputLabel}
          />
        </FormControl>
      </Grid>
      {todos.map((todo) => {
        return (
          <Grid item xs={12} key={todo.id}>
            <Todo todo={todo} />
          </Grid>
        );
      })}
    </Grid>
  );
};

// CSS
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(30),
    marginBottom: theme.spacing(6),
  },
}));

export default TodoList;
