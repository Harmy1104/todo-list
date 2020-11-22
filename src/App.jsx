import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { useThemeContext } from "./context/ThemeContext";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./conponants/Login";
import TodoDashboard from "./conponants/TodoDashboard";
import ErrorPage from "./conponants/ErrorPage";
import { useUserContext } from "./context/UserContext";

const App = () => {
  const { theme } = useThemeContext();
  const { user } = useUserContext();

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
