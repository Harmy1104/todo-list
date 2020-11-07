import { CssBaseline, Grid, ThemeProvider } from "@material-ui/core";
import { useContext } from "react";
import Nav from "./conponants/Nav";
import TodoList from "./conponants/TodoList";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
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
  );
};

export default App;
