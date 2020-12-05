import React, { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { useUserContext } from "../context/UserContext";
import firebase from "../firebase";

export const TodoContext = createContext();

export const useTodoContext = () => {
  return useContext(TodoContext);
};

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  let { user } = useUserContext();
  const db = firebase.firestore();
  const userDocRef = db.collection("users");
  let db_todos_length;
  userDocRef
    .doc(user.uid)
    .get()
    .then((doc) => {
      if (doc.exists) {
        db_todos_length = doc.data().todos.length;
      } else {
        console.log("-- Doc does not exists --");
      }
    })
    .catch((err) => {
      console.log("-- Cannot get Doc --", err);
    });

  const addTodo = (title) => {
    if (title !== "") {
      // setTodos([
      //   {
      //     id: uuid(),
      //     title: title,
      //     isComplete: false,
      //   },
      //   ...todos,
      // ]);
      if (db_todos_length < 100) {
        userDocRef.doc(user.uid).set({
          todos: todos.unshift({
            id: uuid(),
            title: title,
            isComplete: false,
          }),
        });
      }
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
