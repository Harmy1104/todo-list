import { Fab, Grid, makeStyles, TextField } from "@material-ui/core";
import React from "react";
import { Add } from "@material-ui/icons";

const InputTodo = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container xs={12} className={classes.inputRow}>
        <Grid item xs={10}>
          <form noValidate autoComplete="off">
            <TextField
              className={classes.inputField}
              id="input"
              label="Insert ToDo"
              variant="outlined"
            />
          </form>
        </Grid>
        <Grid item xs={2}>
          <Fab color="primary" aria-label="add">
            <Add />
          </Fab>
        </Grid>
      </Grid>
    </div>
  );
};

// CSS
const useStyles = makeStyles({
  inputRow: {
    maxWidth: "720px",
  },
  inputField: {
    width: "100%",
  },
});
export default InputTodo;
