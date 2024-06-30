import React, { useState } from "react";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoListDisplay from "./TodoListDisplay";
import TodoStats from "./TodoStats";
import TodoFooter from "./TodoFooter";
import TodoContextProvider from "../context/TodoContextProvider";

export default function Todo() {
  return (
    <TodoContextProvider>
      <TodoHeader />
      <TodoStats />
      <TodoInput />
      <TodoListDisplay />
      <TodoFooter />
    </TodoContextProvider>
  );
}
