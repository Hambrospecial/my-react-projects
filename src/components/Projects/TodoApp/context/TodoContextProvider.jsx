import { useState } from "react";
import TodoContext from "./TodoContext";

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ name: "", done: false });

  return (
    <TodoContext.Provider value={{ todos, setTodos, todo, setTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
