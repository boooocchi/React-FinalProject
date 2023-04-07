import { useState } from "react";
import React from "react";

function TodoItem({ todoItem, handleChange, deleteTodo }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todoItem.completed}
        onChange={() => handleChange(todoItem.id)}
      />
      <span
        style={todoItem.completed ? { textDecoration: "line-through" } : null}
      >
        {todoItem.title}
      </span>
      <button onClick={() => deleteTodo(todoItem.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
