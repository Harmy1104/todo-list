import { CssBaseline, Grid, ThemeProvider } from "@material-ui/core";
import { useContext } from "react";
import Nav from "./conponants/Nav";
import TodoList from "./conponants/TodoList";
import ThemeContextProvider, { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const theme = useContext(ThemeContext);
  console.log(theme);

  const setTheme = () => {
    console.log("working");
  };
  return (
    <ThemeContextProvider>
      <ThemeProvider>
        <CssBaseline />
        <Grid container justify="center">
          <Grid item>
            <Nav />
          </Grid>
          <Grid item xs={8}>
            <TodoList />
          </Grid>
        </Grid>
      </ThemeProvider>
    </ThemeContextProvider>
  );
};

export default App;
