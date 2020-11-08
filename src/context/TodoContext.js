import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [todos, setTodo] = useState([
    {
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
  ]);

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
    todos.filter((todo) => {
      if (todo.id == id) {
        todo.completed = !todo.completed;
        console.log(todo.completed);
      }
      return todo;
    });
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, markDone }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
