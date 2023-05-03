import React from "react";

export default function TodoForm() {
  return (
    <form className="TodoForm">
      <input
        className="todo-input"
        type="text"
        placeholder="What is the taks today?"
      />
      <button className="todo-btn" type="submit">
        Add Taks
      </button>
    </form>
  );
}
