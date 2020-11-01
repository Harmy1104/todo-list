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
import React from "react";
import Todo from "./Todo";

const inputLabel = "Enter Todo";

const TodoList = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <FormControl variant="outlined" style={{ width: "100%" }}>
          <InputLabel>{inputLabel}</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end">
                  <Add />
                </IconButton>
              </InputAdornment>
            }
            label={inputLabel}
          />
        </FormControl>
      </Grid>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => {
        return (
          <Grid item xs={12}>
            <Todo todo={i} />
          </Grid>
        );
      })}
    </Grid>
  );
};

// CSS
const useStyles = makeStyles((theme) => ({}));

export default TodoList;
