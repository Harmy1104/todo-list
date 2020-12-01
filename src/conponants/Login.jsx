import { makeStyles } from "@material-ui/core";
import React from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
import { auth, loginBtnConfig } from "../firebase";

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.loginContainer}>
      <StyledFirebaseAuth
        className={classes.loginBtns}
        uiConfig={loginBtnConfig}
        firebaseAuth={auth}
      />
    </div>
  );
};

// CSS
const useStyles = makeStyles({
  loginBtns: {
    background: "#404040",
    padding: "5rem 3rem",
    border: "1px solid #000",
    borderRadius: "10px",
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
