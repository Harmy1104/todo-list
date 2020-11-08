import { CssBaseline, Grid, ThemeProvider } from "@material-ui/core";
import { useContext } from "react";
import Nav from "./conponants/Nav";
import TodoList from "./conponants/TodoList";
import { ThemeContext } from "./context/ThemeContext";
import TodoContextProvider from "./context/TodoContext";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container justify="center">
        <Grid item>
          <Nav />
        </Grid>
        <Grid item xs={8} style={{ margin: "auto" }}>
          <TodoContextProvider>
            <TodoList />
          </TodoContextProvider>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
