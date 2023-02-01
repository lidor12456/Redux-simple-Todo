import React, { useState } from "react";
import { useDispatch } from "react-redux";
import todos from "../store/todos";

function TodoInput() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(todos.actions.addTodo(input));
        }}
      >
        <input
          id="todo-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">add to do</button>
      </form>
    </div>
  );
}

export default TodoInput;
