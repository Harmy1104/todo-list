import { Grid } from "@material-ui/core";
import Nav from "./Nav";
import TodoList from "./TodoList";
import TodoContextProvider from "../context/TodoContext";
import { useEffect } from "react";
import { auth } from "../firebase";

const TodoDashboard = () => {
  let u = "";
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user);
      u = user;
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Grid container justify="center">
      <Grid item>
        <Nav name={u} />
      </Grid>
      <Grid item xs={8} style={{ margin: "auto" }}>
        <TodoContextProvider>
          <TodoList />
        </TodoContextProvider>
      </Grid>
    </Grid>
  );
};

export default TodoDashboard;
