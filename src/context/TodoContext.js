import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [todos, setTodo] = useState([]);

  const addTodo = (title) => {
    setTodo([
      ...todos,
      {
        id: uuid(),
        title: title,
        completed: false,
      },
    ]);
  };

  const markDone = (id) => {
    setTodo([
      ...todos.filter((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    ]);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, markDone }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
