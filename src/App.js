import {
  createMuiTheme,
  CssBaseline,
  Grid,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import { useState } from "react";
import Nav from "./conponants/Nav";
import TodoList from "./conponants/TodoList";

const App = () => {
  let [themeState, setThemeState] = useState(false);

  const setTheme = () => {
    setThemeState((themeState = !themeState));
  };

  const theme = createMuiTheme({
    palette: {
      type: themeState ? "light" : "dark",
      primary: {
        main: themeState ? "#f00" : "#0f0",
      },
    },
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} className={classes.nav}>
          <Nav onThemeToggleClick={setTheme} />
        </Grid>
        <Grid item container justify="center" className={classes.todoGrid}>
          <Grid
            item
            container
            justify="center"
            xs={8}
            className={classes.todoGrid}
          >
            <TodoList />
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

// CSS
const useStyles = makeStyles({
  todoGrid: {
    marginTop: "8rem",
  },
  nav: {
    marginTop: "2rem",
  },
});

export default App;
