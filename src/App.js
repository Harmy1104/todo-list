import { Grid } from "@material-ui/core";
import Todo from "./conponants/Todo";

const App = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item>
          <Todo />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
