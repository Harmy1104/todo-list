import { Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
import { auth, uiConfig } from "../firebase";

const Login = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </Grid>
      </Grid>
    </Paper>
  );
};

// CSS
const useStyles = makeStyles({
  root: {
    width: 350,
    height: 350,
    margin: "auto",
  },
});

export default Login;
