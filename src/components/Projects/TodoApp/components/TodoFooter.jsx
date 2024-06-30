import { useContext } from "react";
import styles from "../styles/todofooter.module.css";
import TodoContext from "../context/TodoContext";
export default function TodoFooter() {
  const { setTodos } = useContext(TodoContext);
  function handleClearTasks() {
    setTodos([]);
  }
  return (
    <div className={styles.footer} onClick={() => handleClearTasks()}>
      Clear All Tasks
    </div>
  );
}
