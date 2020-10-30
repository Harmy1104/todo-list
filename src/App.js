import {
  Container,
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
} from "@material-ui/core";
import { useState } from "react";
import Header from "./conponants/Header";
import TodoList from "./conponants/TodoList";

const App = () => {
  let [themeState, setThemeState] = useState(false);

  const setTheme = () => {
    setThemeState((themeState = !themeState));
  };

  const theme = createMuiTheme({
    palette: {
      type: themeState ? "light" : "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container fixed>
        <Header onThemeToggleClick={setTheme} />
        <TodoList />
      </Container>
    </ThemeProvider>
  );
};

export default App;
