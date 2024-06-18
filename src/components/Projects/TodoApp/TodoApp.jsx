import { useState } from "react";
import Todo from "./components/Todo";
import styles from "./app.module.css";

function TodoApp() {
  return (
    <div className={styles.todoApp}>
      <div className={styles.App}>
        <Todo />
      </div>
    </div>
  );
}

export default TodoApp;
