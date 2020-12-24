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
import style from "../index.module.css";
import { ThemeContext, useThemeContext } from "../context/ThemeContext";

// CSS
// TODO: put css in css file
// const useStyles = makeStyles((theme) => ({
//   todoText: {
//     margin: theme.spacing(1),
//     marginLeft: theme.spacing(3),
//     marginRight: theme.spacing(3),
//     overflow: "hidden",
//     textAlign: "justify",
//   },
// }));

const Todo = ({ todo }) => {
  // const classes = useStyles();

  const { isDarkMode } = useThemeContext();
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
    <div className={isDarkMode ? style.darkMode : style.lightMode}>
      <Grid container alignItems="center">
        <Grid item style={{ flexGrow: "1" }} xs={10}>
          <Typography
            variant="h6"
            style={{
              opacity: todo.isComplete ? "0.2" : "1",
              fontWeight: todo.isComplete ? "100" : "200",
              overflowWrap: "anywhere",
            }}
          >
            {todo.title}
          </Typography>
        </Grid>
        <Grid container item xs={2}>
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
