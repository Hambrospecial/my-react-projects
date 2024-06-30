import { useContext } from "react";
import styles from "../styles/todoitem.module.css";
import TodoContext from "../context/TodoContext";
export default function TodoItem({ todo }) {
  const { todos, setTodos } = useContext(TodoContext);
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo.name !== item));
  }

  function toggleDone() {
    setTodos(
      todos.map((t) => (t.name === todo.name ? { ...t, done: !t.done } : t))
    );
  }

  return (
    <div
      className={
        todo.done
          ? `${styles.display_item} ${styles.done}`
          : styles.display_item
      }
      onClick={toggleDone}
    >
      {todo.name}{" "}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleDelete(todo.name);
        }}
      >
        x
      </button>
    </div>
  );
}
