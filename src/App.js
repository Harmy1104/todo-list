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

  // TODO: Move the theme to a different file
  const theme = createMuiTheme({
    palette: {
      type: themeState ? "light" : "dark",
      primary: {
        light: themeState ? "#1aabff" : "#4694d3",
        main: themeState ? "#4694d3" : "#2c7ab9",
        dark: themeState ? "#0091e6" : "#2c7ab9",
      },
      secondary: {
        light: themeState ? "#1aabff" : "#4694d3",
        main: themeState ? "#4acfbe" : "#2a9d8f",
        dark: themeState ? "#0091e6" : "#2c7ab9",
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
