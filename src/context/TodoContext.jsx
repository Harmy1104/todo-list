import React, { createContext, useContext, useState } from "react";
import { useUserContext } from "../context/UserContext";
import firebase from "../firebase";

let t_id = 0;

export const TodoContext = createContext();

export const useTodoContext = () => {
  return useContext(TodoContext);
};

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  let { user } = useUserContext();
  const db = firebase.firestore();
  const todosCollection = db
    .collection("users")
    .doc(user.uid)
    .collection("todos");

  const addTodo = (title) => {
    if (title !== "") {
      ++t_id;

      // show in ui
      setTodos([
        {
          id: t_id,
          title: title,
          isComplete: false,
        },
        ...todos,
      ]);

      // add to db
      todosCollection.doc(String(t_id)).set({
        id: t_id,
        title: title,
        isComplete: false,
      });
    }
  };

  const removeTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        if (todo.id === id) {
          return "";
        }
        return todo;
      }),
    ]);
  };

  const markDone = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      }),
    ]);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, markDone, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
