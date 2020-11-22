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
import React, { useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import Todo from "./Todo";

const TodoList = () => {
  const inputLabel = "Enter Todo";
  const classes = useStyles();

  const { todos, addTodo } = useTodoContext();
  let [title, setTitle] = useState("");

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <FormControl variant="outlined" style={{ width: "100%" }}>
          <InputLabel>{inputLabel}</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            value={title}
            onChange={(event) => setTitle((title = event.target.value))}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                addTodo(title);
                setTitle((title = ""));
              }
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="add todo"
                  onClick={() => {
                    addTodo(title);
                    setTitle((title = ""));
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
    marginTop: "10vh",
    marginBottom: theme.spacing(6),
  },
}));

export default TodoList;
