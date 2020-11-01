import {
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  TextField,
} from "@material-ui/core";
import React from "react";
import { Add } from "@material-ui/icons";

const InputTodo = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.inputRow}>
      <Grid item xs={12}>
        <FormControl variant="outlined" style={{ width: "100%" }}>
          <InputLabel>ToDo</InputLabel>
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
            labelWidth={70}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

// CSS
const useStyles = makeStyles((theme) => ({
  inputRow: {
    maxWidth: "720px",
  },
  inputField: {
    width: "100%",
  },
}));
export default InputTodo;
