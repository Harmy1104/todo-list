import { makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
import { auth, loginBtnConfig } from "../firebase";

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.loginContainer}>
      <Paper elevation={6} className={classes.root}>
        <StyledFirebaseAuth
          className={classes.loginBtns}
          uiConfig={loginBtnConfig}
          firebaseAuth={auth}
        />
      </Paper>
    </div>
  );
};

// CSS
const useStyles = makeStyles({
  root: {
    width: "fit-content",
    height: "fit-content",
    margin: "auto",
  },
  loginBtns: {
    padding: "5rem 3rem",
  },
  loginContainer: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
