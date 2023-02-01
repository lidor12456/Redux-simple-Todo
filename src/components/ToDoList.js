import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import todos from "../store/todos";

function ToDoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      {todos.map((todo) => {
        return <div>{todo.message}</div>;
      })}
    </div>
  );
}

export default ToDoList;
