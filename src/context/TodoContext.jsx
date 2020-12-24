import React, { createContext, useContext, useState } from "react";
import { useUserContext } from "../context/UserContext";
import { v1 as uuid } from "uuid";
import firebase from "../firebase";

export const TodoContext = createContext();

export const useTodoContext = () => {
  return useContext(TodoContext);
};

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  let { user } = useUserContext();
  let todo_id;
  const db = firebase.firestore();
  const todosCollection = db
    .collection("users")
    .doc(user.uid)
    .collection("todos");

  const getTodos = async () => {
    let db_todos_list = await todosCollection.get();
    if (db_todos_list.docs.length > 0) {
      let temp = [];
      db_todos_list.docs.map((item) => {
        temp.push(item.data());
        return true;
      });
      setTodos(temp);
    }
  };

  const addTodo = (title) => {
    if (title !== "") {
      todo_id = uuid();

      // show in front-end
      setTodos([
        {
          id: todo_id,
          title: title,
          isComplete: false,
        },
        ...todos,
      ]);

      // add to db
      todosCollection.doc(String(todo_id)).set({
        id: todo_id,
        title: title,
        dateCreated: new Date(),
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

    todosCollection
      .doc(id)
      .delete()
      .then(() => {
        console.log("Deleted");
      })
      .catch((err) => {
        console.log("There was an error deleting." + err);
      });
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
    <TodoContext.Provider
      value={{ todos, addTodo, markDone, removeTodo, getTodos }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
