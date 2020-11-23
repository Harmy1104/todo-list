import { useEffect } from "react";
import Nav from "./Nav";
import TodoList from "./TodoList";
import TodoContextProvider from "../context/TodoContext";
import { useUserContext } from "../context/UserContext";
import { Grid, Typography } from "@material-ui/core";

const TodoDashboard = (props) => {
  const { user, setUserAccount } = useUserContext();

  useEffect(async () => {
    const unsubscribe = await setUserAccount();
    console.log(user);
    return () => {
      unsubscribe();
    };
  }, []);

  if (user) {
    return (
      <Grid container justify="center">
        <Grid item>
          <Nav props={props} />
        </Grid>
        <Grid item xs={8} style={{ margin: "auto" }}>
          <TodoContextProvider>
            <TodoList />
          </TodoContextProvider>
        </Grid>
      </Grid>
    );
  } else {
    return <Typography variant="h1">Please wait...</Typography>;
  }
};

export default TodoDashboard;
