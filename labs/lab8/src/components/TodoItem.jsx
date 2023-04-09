import { useState, useRef } from "react";
import Modal from "@/UI/Modal";

import styles from "@/style/TodoItem.module.scss";

function TodoItem({ todoItem, deleteTodo }) {
  const [todo, setTodo] = useState(todoItem);
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdateSubmit = (inputRef) => {
    setTodo({
      ...todo,
      title: inputRef.current.value
    });
    setEditing(false);
  };

  const handleChange = () => {
    setTodo({
      ...todo,
      completed: !todo.completed
    });
  };

  return (
    <li>
      <div className={styles.item}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleChange}
        />
        <span
          style={todo.completed ? { textDecoration: "line-through" } : null}
        >
          {todo.title}
        </span>
        <button onClick={handleEditing}>Edit</button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
      {editing && (
        <Modal
          todo={todoItem}
          onSaveHandleUpdate={handleUpdateSubmit}
          editState={editing}
          setShowModal={setEditing}
        ></Modal>
      )}
    </li>
  );
}

export default TodoItem;
