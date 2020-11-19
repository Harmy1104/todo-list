import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { useContext } from "react";
import Login from "./conponants/Login";
import TodoDashboard from "./conponants/TodoDashboard";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TodoDashboard />
      <Login />
    </ThemeProvider>
  );
};

export default App;
