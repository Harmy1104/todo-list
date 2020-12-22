import {
  Checkbox,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Snackbar,
  Typography,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { Delete, Edit } from "@material-ui/icons";
import { useTodoContext } from "../context/TodoContext";
import { useState } from "react";

// CSS
// TODO: put css in css file
const useStyles = makeStyles((theme) => ({
  loginContainer: {
    background: theme.palette.type == "dark" ? "#282828" : "#e5e5e5",
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
    // border: theme.palette.type == "dark" ? "1px solid #000" : "1px solid #ccc",
    borderRadius: "10px",
  },
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
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    overflow: "hidden",
    textAlign: "justify",
  },
}));

const Todo = ({ todo }) => {
  const classes = useStyles();

  // Todos
  const { markDone, removeTodo } = useTodoContext();
  // for toast
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    setOpen(true);
    removeTodo(todo.id);
  };
  const handleEdit = () => {
    console.log("edit");
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.loginContainer}>
      <Grid container alignItems="center">
        <Grid item style={{ flexGrow: "1" }} xs={10}>
          <Typography
            variant="h6"
            className={classes.todoText}
            style={{
              opacity: todo.isComplete ? "0.2" : "1",
              fontWeight: todo.isComplete ? "100" : "200",
            }}
          >
            {todo.title}
          </Typography>
        </Grid>
        <Grid container item xs={2} className={classes.centerCenter}>
          <Grid item xs={4}>
            <Checkbox
              checked={todo.isComplete}
              onClick={() => markDone(todo.id)}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </Grid>
          <Grid item xs={4}>
            <IconButton aria-label="delete" onClick={handleEdit}>
              <Edit />
            </IconButton>
          </Grid>
          <Grid item xs={4}>
            <IconButton aria-label="delete" onClick={handleDelete}>
              <Delete />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <MuiAlert
          elevation={6}
          variant="filled"
          severity="success"
          onClose={handleClose}
        >
          This is a success message!
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default Todo;
