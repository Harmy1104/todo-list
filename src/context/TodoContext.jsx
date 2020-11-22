import React, { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const TodoContext = createContext();

export const useTodoContext = () => {
  return useContext(TodoContext);
};

const TodoContextProvider = ({ children }) => {
  const [todos, setTodo] = useState([]);

  const addTodo = (title) => {
    if (title !== "") {
      setTodo([
        {
          id: uuid(),
          title: title,
          isComplete: false,
        },
        ...todos,
      ]);
    }
  };

  const removeTodo = (id) => {
    setTodo([
      ...todos.filter((todo) => {
        if (todo.id === id) {
          return "";
        }
        return todo;
      }),
    ]);
  };

  const markDone = (id) => {
    setTodo([
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
