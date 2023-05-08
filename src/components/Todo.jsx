import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Todo({ todo, deleteTodo, toggleComplete }) {
  return (
    <div className="Todo">
      <p
        className={`${todo.isCompleted ? "completed" : ""}`}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.todo}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  );
}
