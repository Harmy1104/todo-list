import { makeStyles } from "@material-ui/core";
import React from "react";

const ErrorPage = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <div style={{ display: "flex" }}>
        <h1 className={classes.errCode}>40</h1>
        <h1 className={classes.errCode} style={{ transform: "rotate(10deg)" }}>
          4
        </h1>
      </div>
      <h2 className={classes.errMsg}>Don't deviate from your virtual path</h2>
    </div>
  );
};

// CSS
const useStyle = makeStyles({
  root: {
    fontFamily: "IBM Plex Mono",
    width: "100vw",
    height: "85vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  errCode: {
    fontSize: "20vw",
  },
  errMsg: {
    fontSize: "2vw",
  },
});
export default ErrorPage;
