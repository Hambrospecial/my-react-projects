import { useContext } from "react";
import styles from "../styles/todolistdisplay.module.css";
import TodoItem from "./TodoItem";
import TodoContext from "../context/TodoContext";
export default function TodoListDisplay() {
  const { todos } = useContext(TodoContext);
  return (
    <div className={styles.displayWrapper}>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </div>
  );
}
