import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { useContext } from "react";
import Login from "./conponants/Login";
import TodoDashboard from "./conponants/TodoDashboard";
import { ThemeContext } from "./context/ThemeContext";
import { Route, Switch } from "react-router-dom";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Route exact path="/" component={Login} />
      <Route exact path="/todos" component={TodoDashboard} />
    </ThemeProvider>
  );
};

export default App;
