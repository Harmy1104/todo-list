import {
  Checkbox,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { useTodoContext } from "../context/TodoContext";

const Todo = ({ todo }) => {
  // CSS
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: `${theme.spacing(2)}px`,
      padding: theme.spacing(1),
      borderRadius: "10px",
    },
    centerCenter: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    todoText: {
      margin: theme.spacing(1),
      opacity: todo.isComplete ? "0.2" : "1",
      fontWeight: todo.isComplete ? "100" : "200",
      overflow: "hidden",
      textAlign: "justify",
    },
  }));
  const classes = useStyles();

  const { markDone, removeTodo } = useTodoContext();

  return (
    <Paper className={classes.paper}>
      <Grid container alignItems="center">
        <Grid item xs={1} className={classes.centerCenter}>
          <Checkbox
            checked={todo.isComplete}
            onClick={() => markDone(todo.id)}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </Grid>
        <Grid item style={{ flexGrow: "1" }} xs={10}>
          <Typography variant="h6" className={classes.todoText}>
            {todo.title}
          </Typography>
        </Grid>
        <Grid item xs={1} className={classes.centerCenter}>
          <IconButton aria-label="delete" onClick={() => removeTodo(todo.id)}>
            <Delete />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Todo;
