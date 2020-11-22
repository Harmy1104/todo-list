import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { useThemeContext } from "./context/ThemeContext";
import { Route, Switch } from "react-router-dom";
import Login from "./conponants/Login";
import TodoDashboard from "./conponants/TodoDashboard";
import ErrorPage from "./conponants/ErrorPage";

const App = () => {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={TodoDashboard} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
