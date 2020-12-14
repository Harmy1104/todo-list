import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
} from "@material-ui/core";
import { Add, BorderRightRounded } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import Todo from "./Todo";
import { useUserContext } from "../context/UserContext";
import firebase from "../firebase";

const TodoList = () => {
  const inputLabel = "Enter Todo";
  const classes = useStyles();
  let [title, setTitle] = useState("");

  const { todos, addTodo } = useTodoContext();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <FormControl variant="outlined" style={{ width: "100%" }}>
          <InputLabel>{inputLabel}</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            value={title}
            style={{ borderRadius: "10px" }}
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
            autoComplete="off"
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
