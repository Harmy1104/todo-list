import { Grid } from "@material-ui/core";
import Nav from "./Nav";
import TodoList from "./TodoList";
import TodoContextProvider from "../context/TodoContext";

const TodoDashboard = () => {
  return (
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
  );
};

export default TodoDashboard;
