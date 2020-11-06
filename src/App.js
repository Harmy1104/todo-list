import {
  createMuiTheme,
  CssBaseline,
  Grid,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import { cyan, lightBlue } from "@material-ui/core/colors";
import { useState } from "react";
import Nav from "./conponants/Nav";
import TodoList from "./conponants/TodoList";
import ThemeContextProvider from "./context/ThemeContext";

const App = () => {
  let [themeState, setThemeState] = useState(false);

  const setTheme = () => {
    setThemeState((themeState = !themeState));
  };

  return (
    <ThemeProvider>
      <CssBaseline />
      <ThemeContextProvider>
        <h1>hahaha its not working any more</h1>
        <Nav onThemeToggleClick={setTheme} />
        <TodoList />
      </ThemeContextProvider>
    </ThemeProvider>
  );
};

export default App;
